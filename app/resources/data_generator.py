#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
This program is used for mocking data.
"""

import numpy as np
import matplotlib.pyplot as plt
import random
from mpl_toolkits.mplot3d import Axes3D
import argparse
import math


def get_value(average, happiness):
    """
    Function for getting a single value using average and happiness.
    Uses gaussian distribution for sampling. However, a cut-off at 50 percent
    difference to average is used in order to not get strange values.
    This cut-off also ensures that the values keep their sign.

    mu is set to average and sigma is calculated using the happiness.

    sigma is calculated to mu * 0.3 * (1.05 - happiness), ensuring at least
    5 percent deviation, regardless of happiness. However, there is a
    10 percent probability for any sample to become noise,
    with sigma being mu * 0.3.

    Args:
        average (int): Average that should be used for sampling.
        happiness (float): Happiness of the person value is generated for.
                           Must be a value between 0 and 1 inclusively.

    Returns:
        float: The return value. A random gaussian sample with average as
               specified in args.

    """
    mu = average
    sigma = average * 0.3

    # 10% chance to become noise
    if random.random() > 0.10:
        # Standard deviation is always 5% or more
        sigma *= (1.05-happiness)   # sigma = sigma * (1.05 -happiness)
    s = np.random.normal(mu, sigma)

    # Make sure sample is plausible
    if abs(s-average)<=average*0.5:
        return s
    else:
        # Run again, since odds for failure are ~12%.
        # Risk for max recursion < 6.1 * 10^(-947)
        return get_value(average, happiness)

def get_all_values(happiness=None):
    """
    Function for getting a all values using happiness.
    The function calls get_value(), using the happiness provided and the list
    of values specified in 'ideal'.

    The underlying function uses gaussian distribution for sampling.
    However, a cut-off at 50 percent difference to average is used in
    order to not get strange values. This cut-off also ensures that
    the values keep their sign.


    Args:
        happiness (float): Happiness of the person value is generated for.
                           Must be a value between 0 and 1 inclusively.
                           If happiness is left blank, a random float between
                           0.2 and 1 inclusively is used, drawn from a uniform
                           distribution. This is done using get_happiness()

    Returns:
        [float, ..., float]: The return array. An array of random gaussian sample with
                average as specified in 'ideal'.

    """

    if happiness == None:
        happiness = get_happiness()

    # Get values for each target value

    # food = [get_value(target_value, happiness) for target_value in ideal_food]
    # sleep = [get_value(target_value, happiness) for target_value in ideal_sleep]
    # training = [get_value(target_value, happiness) for target_value in ideal_training]
    reality = [get_value(target_value, happiness) for target_value in ideal]

    # # Print all values
    #
    # print("Happiness:", happiness)
    # for i,_ in enumerate(ideal_food):
    #     print(ideal_food[i], ":", food[i])
    # for i,_ in enumerate(ideal_sleep):
    #     print(ideal_sleep[i], ":", sleep[i])
    # for i,_ in enumerate(ideal_training):
    #     print(ideal_training[i], ":", training[i])
    # for i,_ in enumerate(ideal):
    #     print(ideal[i], ":", reality[i])

    return reality

def get_happiness():
    return random.uniform(0.2,1)

def get_historical_values(target, start, progression='linear',time=100):

    print("target:",target,"\t\tstart:", start)

    '''
    Vi skulle kunna använda det för at presentera olika personers vanemönster:
    - Linear
    - Exponential
    - Logarithmical
    '''

    if progression == 'linear':
        return [get_value(start + (i+1)*(target-start)/time, 0.5+(i/time/2)) for i in range(time)]
    elif progression == 'exp':
        return [get_value(start + (math.exp((i+1)/time)-1)/(math.exp(1)-1)*(target-start), 0.5+(i/time/2)) for i in range(time)]
    elif progression == 'log':
        return [get_value(start + (math.log((i+1)/time+1)/math.log(2))*(target-start), 0.5+(i/time/2)) for i in range(time)]
    else:
        return []

def get_all_historical_values(progression='linear', time=100):
    # Profile for the historical values starting position
    calories = 3750
    fat = 300
    sugar = 250
    greens = 0
    protein = 450
    carbohydrates = 800
    food = [calories, fat, sugar, greens, protein, carbohydrates]

    sleep_time = 5
    movement_index = 600
    sleep = [sleep_time, movement_index]

    number_of_steps = 2500
    running_km = 0
    max_pulse = 180
    average_pulse = 110
    training_time = 0
    training = [number_of_steps, running_km, max_pulse, average_pulse, training_time]

    start = food + sleep + training

    return [get_historical_values(ideal[i],start[i], progression, time) for i in range(len(start))]


def get_manhattan(values):
    distance = [0 for _ in values]
    for i,value  in enumerate(values):
        distance[i] = abs(ideal[i]-value)
    return distance, sum(distance)

def run_distance_sample():
    happy = []
    data_distance = []
    for _ in range(10000):
        happiness = get_happiness()
        sample = get_all_values(happiness)
        each_distance, manhattan = get_manhattan(sample)
        # print("Distance:", manhattan)
        happy.append(happiness)
        data_distance.append(manhattan)

    plt.xlabel('Manhattan distance')
    plt.ylabel('Happiness')
    plt.plot(data_distance, happy, 'bx', 0, [1], 'go')
    plt.show()

def run_2d_sample():
    happy = []
    data_calories = []

    for i in range(1000):
        happiness = get_happiness()
        calories = get_value(ideal_calories, happiness)
        sleep = get_value(ideal_sleep_time, happiness)
        # print("Number of calories:", calories)
        data_calories.append(calories)
        happy.append(happiness)

    plt.xlabel('Calories')
    plt.ylabel('Happiness')
    plt.plot(data_calories, happy, 'bx', [ideal_calories], [1], 'go')
    plt.show()

def run_3d_sample():

    happy = []
    data_calories = []
    data_sleep = []

    for i in range(1000):
        happiness = get_happiness()
        calories = get_value(ideal_calories, happiness)
        sleep = get_value(ideal_sleep_time, happiness)
        # print("Number of calories:", calories)
        data_calories.append(calories)
        data_sleep.append(sleep)
        happy.append(happiness)

    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    ax.set_xlabel('Calories per day')
    ax.set_ylabel('Sleep per night')
    ax.set_zlabel('Happiness')

    ax.scatter(data_calories, data_sleep, happy, 'bx')
    plt.show()


#--------------------------SET CONSTANTS--------------------------
# Set all food values
ideal_calories = 2250
ideal_fat = 50
ideal_sugar = 25
ideal_greens = 500
ideal_protein = 100
ideal_carbohydrates = 300

ideal_food = [ideal_calories, ideal_fat, ideal_sugar, ideal_greens, ideal_protein, ideal_carbohydrates]

# Set all sleep values
ideal_sleep_time = 7
#ideal_times_awoken = 0
#ideal_sleep_cycles = 5
ideal_movement_index = 100

ideal_sleep = [ideal_sleep_time, ideal_movement_index]

# Set all training values
ideal_number_of_steps = 10000
ideal_runnining_km = 5
ideal_max_pulse = 180
ideal_average_pulse = 70
ideal_training_time = 1.5

ideal_training = [ideal_number_of_steps, ideal_runnining_km, ideal_max_pulse, ideal_average_pulse, ideal_training_time]

ideal = ideal_food + ideal_sleep + ideal_training




# parser = argparse.ArgumentParser(description='Mock some data')


values = get_all_historical_values(progression='linear', time=365)
plt.plot(values[3])
plt.show()

# run_2d_sample()
# run_3d_sample()
# run_distance_sample()

# if len(sys.argv)==0:
#     print("usage: python3 data_generator [[option]|[arg]]")
#     print("Options:")
#     print("-h\t\t: Show this help")
#     print("-3d\t\t: Run 3D sample plot")
#     print("-2d\t\t: Run 2D sample plot")
#     print("-m\t\t: Run manhattan sample plot")
#     print("Argument")
#     print("<integer>\t\t: Number of datapoints to print")
