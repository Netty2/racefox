from app import db, login_manager, app
from flask_login import UserMixin
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(int(user_id))


class User(db.Model, UserMixin):
	id = db.Column(db.Integer, primary_key=True)	# Unikt för varje användare, används när man skapar unika "reset-password-tokens"
	email = db.Column(db.String(120), unique=True, nullable=False)
	password = db.Column(db.String(60), nullable=False)

	# Metod för att skapa en token kopplat till en specifik användare om denne har glömt sitt lösenord. Detta gör när man är inne på /reset_password
	def get_reset_token(self, expires_sec=1800):
		s = Serializer(app.config['SECRET_KEY'], expires_sec)
		return s.dumps({'user_id': self.id}).decode('utf-8')	# Skapar ett unikt token med User-id

	# Metod som används för att validera ett token av en klient
	# Statisk metod eftersom att vi inte skickar med self som en parameter
	@staticmethod
	def verify_reset_token(token):
		s = Serializer(app.config['SECRET_KEY'])	# Secret key används som "private key" av databasen. Det är en sträng som är definierad i __init__.py
		try:
			user_id = s.loads(token)['user_id']		# returnerar user_id för det aktuella tokenet
		except:
			return None
		return User.query.get(user_id)				# retuenerar User-objektet kopplat till användaren mha user_id

	def __repr__(self):
		return f"User('{self.email}')"				# Detta är det man får tillbaks om man printar objektet. Alltså inte PW eller id, bara mailen


# NEDAN LÄGGER VI TILL FLER TABLES