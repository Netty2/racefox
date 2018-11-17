from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError
from app.models import User

class RegistrationForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Password', validators=[DataRequired()])
	confirm_password = PasswordField('Confirm password',
		validators=[DataRequired(), EqualTo('password')])
	submit = SubmitField('Sign up')

	# Kontrollera om email-adressen redan finns i databasen
	def validate_email(self, email):
		email = User.query.filter_by(email=email.data).first()
		if email:
			raise ValidationError('The email already exists. Choose another one.')

# Form som används för att ta emot input när en användare loggar in
class LoginForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Password', validators=[DataRequired()])
	remember = BooleanField('Remember me')
	submit = SubmitField('Login')

# Form för att uppdatera kontoinformation
class UpdateAccountForm(FlaskForm):
	old_password = PasswordField('Current password', validators=[DataRequired()])
	new_password = PasswordField('New password', validators=[DataRequired()])
	confirm_password = PasswordField('Confirm new password', validators=[DataRequired(), EqualTo('new_password')])
	submit = SubmitField('Update password')

# Form som används i reset password request
class RequestResetForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	submit = SubmitField('Send password reset')

	# Kontrollera om email-adressen redan finns i databasen
	def validate_email(self, email):
		email = User.query.filter_by(email=email.data).first()
		if email is None:
			raise ValidationError('There is no account with that email, please register first.')

# Input-form och knapp som finns när man återställer lösenord
class ResetPasswordForm(FlaskForm):
	password = PasswordField('Password', validators=[DataRequired()])
	confirm_password = PasswordField('Confirm password',
		validators=[DataRequired(), EqualTo('password')])
	submit = SubmitField('Reset password')