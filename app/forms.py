from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
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
			raise ValidationError('Mailadressen finns redan. Glömt Lösenordet? Annars välj en annan.')

# Form som används för att ta emot input när en användare loggar in
class LoginForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Lösenord', validators=[DataRequired()])
	remember = BooleanField('Kom igåg mig')
	submit = SubmitField('Logga in')

# Form för att uppdatera kontoinformation
class UpdateAccountForm(FlaskForm):
	old_password = PasswordField('Nuvarande lösenord', validators=[DataRequired()])
	new_password = PasswordField('Nytt lösenord', validators=[DataRequired()])
	confirm_password = PasswordField('Konfirmera nytt lösenord', validators=[DataRequired(), EqualTo('new_password')])
	submit = SubmitField('Uppdatera lösenord')

# Form som används i reset password request
class RequestResetForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	submit = SubmitField('Skicka lösonordsåterställning')

	# Kontrollera om email-adressen redan finns i databasen
	def validate_email(self, email):
		email = User.query.filter_by(email=email.data).first()
		if email is None:
			raise ValidationError('Det finns inget konto med den emailen. Du måste registrera dig först')

# Input-form och knapp som finns när man återställer lösenord
class ResetPasswordForm(FlaskForm):
	password = PasswordField('lösenord', validators=[DataRequired()])
	confirm_password = PasswordField('Bekräfta lösenord', 
		validators=[DataRequired(), EqualTo('password')])
	submit = SubmitField('Återställ lösenord')

# Form som används för att uppdatera ett svar
class UpdateResponseForm(FlaskForm):
	updated_response = StringField('Nytt svar', validators=[DataRequired()])
	submit = SubmitField('Uppdatera svar')