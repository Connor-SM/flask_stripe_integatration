import stripe
from app import app


class Stripe():
    stripe_keys = {
        'secret_key': app.config['SECRET_KEY'],
        'publishable_key': app.config['PUBLISHABLE_KEY']
    }

    stripe.api_key = stripe_keys['secret_key']
