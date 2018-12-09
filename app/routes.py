from flask import render_template, url_for, flash, redirect, request, jsonify
from app.forms import RegistrationForm, LoginForm, UpdateAccountForm, RequestResetForm, ResetPasswordForm, UserInputForm
from app import app, bcrypt, db, mail
from app.models import User
from flask_login import login_user, current_user, logout_user, login_required
from flask_mail import Message
from app.data_generator_clone import get_all_historical_values
from app.recourses.data_generator import get_csv

@app.route("/")
@app.route("/home")
def home():
	# TODO: get user data containing notifications and AI-generated tips
	mock_home_data = {
		"coach_messages": ["eat a snack", "Do yoga", "Take a 10 mile walk"],
		"daily_question": True,
		"clusters": ["Cluster 1 : 78%", "Cluster 2 : 59%", "Cluster 3 : 43%", "Cluster 4 : 19%", "Cluster 4 : 9%"]
 	}
	# TODO: get the daily_question attribute from the actual user, so we know wether to show it or not for that day.
	return render_template('home.html', title='Home', user_data = mock_home_data)

@app.route("/sleep")
def load_sleep():
	# TODO: Get the user id and fetch the specific historic data for that user
	mock_sleep_data = [
		{
		"date": "2018-11-25",
		"day_display_name": "Today",
		"hours_slept": 0.6,
		"sleep_quality": 0.7
		},
		{
		"date": "2018-11-24",
		"day_display_name": "Yesterday",
		"hours_slept": 0.2,
		"sleep_quality": 0.3
		},
		{
		"date": "2018-11-23",
		"day_display_name": "Friday",
		"hours_slept": 0.3,
		"sleep_quality": 0.8
		},
		{
		"date": "2018-11-24",
		"day_display_name": "Thursday",
		"hours_slept": 0.55,
		"sleep_quality": 0.68
		}
	]
	if request.args.get('view') == 'historical':
		sleep_time_data_points = get_all_historical_values()[6]

		sleep_time = {
			"week": sleep_time_data_points[:7],
			"month": sleep_time_data_points[:30],
			"all": sleep_time_data_points
		}

		return render_template('sleephistorical.html', title='Sleep - Historical', data={"sleep_time": sleep_time}
		) #TODO: Lägg till data för historical
	else:
		return render_template('sleep.html', title = 'Sleep - Daily', user_data = mock_sleep_data)

@login_required
@app.route("/activity")
def load_activity():
	mock_activity_data = [
		{
			"date": "2018-11-25",
			"day_display_name": "Today",
			"steps": 0.6,
			"stairs": 0.7,
			"distance": 0.8
		},
		{
			"date": "2018-11-24",
			"day_display_name": "Yesterday",
			"steps": 0.6,
			"stairs": 0.7,
			"distance": 0.8
		},
		{
			"date": "2018-11-23",
			"day_display_name": "Friday",
			"steps": 0.6,
			"stairs": 0.7,
			"distance": 0.8
		},
		{
			"date": "2018-11-24",
			"day_display_name": "Thursday",
			"steps": 0.6,
			"stairs": 0.7,
			"distance": 0.8
		}
	]
	if request.args.get('view') == 'historical':
		avg_pulse_data_points = get_all_historical_values()[13]
		max_pulse_data_points = get_all_historical_values()[12]
		workout_calories_data_points = get_all_historical_values()[15]
		running_km_data_points = get_all_historical_values()[11]

		avg_pulse = {
			"month": avg_pulse_data_points[:30],
		}

		max_pulse = {
			"month": max_pulse_data_points[:30],
		}

		workout_calories = {
			"month": workout_calories_data_points[:30],
		}

		running_km = {
			"month": running_km_data_points[:30],
		}

		return render_template(
			'activityhistorical.html',
			title='Activity & Training - Historical',
			data={"avg_pulse": avg_pulse, "max_pulse": max_pulse, "workout_calories": workout_calories, "running_km": running_km}
		)
	else:
		return render_template('activity.html', title = 'Activity and Training - Daily', user_data = mock_activity_data)


@login_required
@app.route("/food")
def load_food():
	# TODO: Get the user id and fetch the specific historic data for that user
	mock_food_data = [
		{
		"date": "2018-11-25",
		"day_display_name": "Today",
		"carbohydrates": 0.5,
		"fat": 0.3,
		"protein": 0.7
		},
		{
		"date": "2018-11-24",
		"day_display_name": "Yesterday",
		"carbohydrates": 0.5,
		"fat": 0.6,
		"protein": 0.7
		},
		{
		"date": "2018-11-23",
		"day_display_name": "Friday",
		"carbohydrates": 0.5,
		"fat": 0.6,
		"protein": 0.7
		},
		{
		"date": "2018-11-24",
		"day_display_name": "Thursday",
		"carbohydrates": 0.5,
		"fat": 0.6,
		"protein": 0.7
		}
	]
	if request.args.get('view') == 'historical':
		calories_data_points = get_all_historical_values()[0]
		carbohydrates_data_points = get_all_historical_values()[5]
		protein_data_points = get_all_historical_values()[4]
		fat_data_points = get_all_historical_values()[1]
		sugar_data_points = get_all_historical_values()[2]
		greens_data_points = get_all_historical_values()[3]

		calories = {
			"month": calories_data_points[:30],
		}
		carbohydrates = {
			"month": carbohydrates_data_points[:30],
		}
		protein = {
			"month": protein_data_points[:30],
		}
		fat = {
			"month": fat_data_points[:30],
		}
		sugar = {
			"month": sugar_data_points[:30],
		}
		greens = {
			"month": greens_data_points[:30],
		}
		return render_template(
			'foodhistorical.html',
			title = 'Food & Nutrition - Historical',
			data={
				"calories": calories,
				"carbohydrates": carbohydrates,
				"protein": protein,
				"fat": fat,
				"sugar": sugar,
				"greens": greens}
		)
	else:
		return render_template('food.html', title = 'Food & Nutrition - Daily', user_data = mock_food_data)


@app.route("/register", methods=['GET', 'POST']) # Kan hantera både GET och POST requests. POST requests sker när man skickar in inloggningsdetaljer
def register():
	if current_user.is_authenticated:	# current_user är en modul importerad från flask_login som känner av om någon redan är inloggad
		return redirect(url_for('home'))# Om så är fallet, rendera home.html
	form = RegistrationForm()			# Om inte, hämta RegistrationForm från Forms.py, och sedan se Return statement nedan
	if form.validate_on_submit():		# OM SubmitField klickas, kör nedan

		hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8') # form.password.data = det som användaren har skrivit in i PasswordField (se forms.py). Detta hashas med flasks modul bcrypt
		user = User(email=form.email.data, password=hashed_password)						# Inloggningsdetaljer sparas i ett objekt via clasen User från models.py som sparar parametrarna (ID, email, PW)
		db.session.add(user)	# SQLAlchemy kommando för att adda objektet
		db.session.commit() 	# commitar till databasen
		flash('Account created for ' + form.email.data +'. Please enter information below', 'info')		# Givet att allt ovan fungerar så kommer en grön ('success') banner upp i toppen av sidan och konfirmerar att det gick
		return redirect(url_for('user_input', user=user.email))												# För att samtidigt redirecta dig till login-sidan (url_for är en modul importerad från flask)
	return render_template('register.html', title='Register', form=form) # Om ingen är inloggad så renderas register.html tillsammans med RegistrationForm som hanterar registreringstrafiken


@app.route("/userinput", methods=['GET', 'POST'])
def user_input():
	useremail = request.args.get("user")
	user = User.query.filter_by(email=useremail).first()
	form = UserInputForm()
	if form.validate_on_submit():
		login_user(user)
		flash(f'You are now logged in and ready to go as {useremail}', 'success')
		return redirect(url_for('home'))
	return render_template('userinputpage.html', title="User input", form=form)


@app.route("/login", methods=['GET', 'POST']) # Kan hantera både GET och POST requests. POST requests sker när man skickar in inloggningsdetaljer
def login():
	if current_user.is_authenticated:	# current_user är en modul importerad från flask_login som känner av om någon redan är inloggad
		return redirect(url_for('home'))# Om så är fallet, rendera home.html
	form = LoginForm()					# Om inte, hämta RegistrationForm från Forms.py, och sedan se Return statement nedan
	if form.validate_on_submit():		# OM SubmitField klickas, kör nedan
		# Kod som kontrollerar om användaren finns i databasen
		user = User.query.filter_by(email=form.email.data).first() 					# Försöker hämta användaren i databasen genom att kolla om det finns ett User-objekt med angiven email
		if user and bcrypt.check_password_hash(user.password, form.password.data):  # Om användarnamnet stämmer samt om lösenordet som användaren skrivit in i formen stämmer med det hashade lösenordet i databasen, kör nedan
			login_user(user, remember=form.remember.data)							# login_user är en importerad modul från flask. remember är en form som finns i Forms.py. En check-box "remember me"
			next_page = request.args.get('next')									# Funktion som tar dig till den sidan du va på innan, om du försökt klicka på kundsida men inte kommit åt den pga att du inte var inloggad, så ska du redirectas till den och inte första-sidan när du lyckats logga in
			flash('Welcome, you are logged in as ' + user.email, 'success')		# Grön banner som säger att det gick bra
			return redirect(next_page) if next_page else redirect(url_for('home'))	# Redirect till första-sidan om du inte försökt komma in på någonting annat innan
		else:
			flash('Invalid email or password, please try again.', 'danger')		# Fungerar det inte, så kommer det istället upp en röd ('danger') banner med text
	return render_template('login.html', title='Login', form=form)					# Renderar login.html och skickar in formen


# Denna route renderar ingenting specielt, utan den kör flask-kommantod logout_user() och redirectar dig till första-sidan
@app.route("/logout")
def logout():
	logout_user()
	return redirect(url_for('home'))

# Sida för att kunna ändra dina inloggningsuppgifter
@app.route("/account", methods=['GET', 'POST'])
@login_required		# Går bara att accessa om du är inloggad
def account():
	form = UpdateAccountForm()
	if form.validate_on_submit():
		if bcrypt.check_password_hash(current_user.password, form.old_password.data):
			new_hashed_password = bcrypt.generate_password_hash(form.new_password.data).decode('utf-8')
			current_user.password = new_hashed_password
			db.session.commit()
			flash('Your password has succecfully been updated', 'success')
			return redirect(url_for('home'))
		else:
			flash('Wrong password, try again', 'danger')
	return render_template('account.html', title='Account', form=form)

# Sida du kommer till när du klickat på "Glömt lösenord?"
@app.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
	if current_user.is_authenticated:
		return redirect(url_for('home'))
	form = RequestResetForm()		# Form från forms.py
	if form.validate_on_submit():	# OM SubmitField klickas, kör nedan
		user = User.query.filter_by(email=form.email.data).first() # Kollar i databasen om det finns en användare med angiven email, if so, hämta objektet
		send_reset_email(user)		# Anropa funktionen send_reset_email() (se nedan), och skicka med user-objektet
		flash('An email has beeen sent to restore the password.', 'info')	# Gul banner ('info') som säger att att återställningsmail har skickats till angiven email
		return redirect(url_for('login'))
	return render_template('reset_request.html', title='Reset Password', form=form)

@app.route('/')

def send_reset_email(user):
	token = user.get_reset_token() # Skapar en unik "token" mha av User-objektet, googla detta för att få klarthet. Utan parameter så blir default livslängd 30min
	msg = Message('Password Reset Request', # Mail-funktion från flask_mail
		sender='racefoxtest@gmail.com',
		recipients=[user.email])			# Mottagaren av mailet ska vara den mail som är angiven och finns i databasen
	# Nedanstående är själva mailet som mottagaren kommer att få från ONONABtest@gmail.com som det ser ut nu
	# msg.body = '''Press the link to restore your password:
	# {url_for('reset_token', token=token, _external=True)}
	# '''
	msg.html = render_template('password_reset_email.html', reset_url = url_for('reset_token', token=token, _external=True))

	mail.send(msg)	# Skickar meddelandet, se __init__.py för att förstå hur konfigurationerna för detta fungerar, och GOOGLA


# Sida som du kommer till när du har klickat på länken som du får i mailet när du har glömt lösenordet
@app.route("/reset_password/<token>", methods=['GET', 'POST'])	# Tokene'n som skapades mha User-objektet ovan kommer att läggas efter "/" i GET-requesten som kommer att användas för att validera att det är du (tidsbegränsad)
def reset_token(token):
	if current_user.is_authenticated:
		return redirect(url_for('home'))
	user = User.verify_reset_token(token)	# Metod som verifierar att det är rätt token samt plockar fram rätt objekt
	if user is None:						# Om det inte finns någon user eller om ditt token har "dött" (tar 30min), kör nedan
		flash('Bad or expired token', 'warning')	# Röd banner ('warning') med text om att det inte fungerar
		return redirect(url_for('reset_request'))	# Skickar tillbaks en till sidan för att skapa ett nytt token och få ett nytt mail
	form = ResetPasswordForm()						# Form från forms.py
	if form.validate_on_submit():					# OM SubmitField klickas, kör nedan
		hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8') # Hashar det nya lösenordet som anges i PasswordField
		user.password = hashed_password		# Updaterar det aktuella user-objektet
		db.session.commit()					# commitar till databasen (viola det är nu ändrat)
		flash('Your password has been reset! You can now login', 'success')
		return redirect(url_for('login'))	# Redirectar dig till login så att du kan logga in med det nya lösenordet
	return render_template('reset_token.html', title='Reset Password', form=form)	# Renderar reset_token.html


@app.route("/report-wellness", methods=['GET', 'POST'])
def report_wellness():
	if current_user.is_authenticated:
		print("user data was recorded", request.form["wellness"])
		# TODO: In some way, set the user to already have answered the form
		return jsonify({"message": "success"})

@app.route("/nerd-data")
def nerd_data():
	data = get_csv("burger_user_100d")
	return render_template("parallel_coordinates.html", title="Nerd data", csv_content=data)
