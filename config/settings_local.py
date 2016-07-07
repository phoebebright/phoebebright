from __future__ import absolute_import, unicode_literals

from .settings import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'b($7(e2&+c01-%zqe9g$d)5g%ryr^1h7_qe)f9w&typ&q7!w_6'


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DATABASES = {
    "default": {

        "ENGINE": "django.db.backends.mysql",
        "NAME": "phoebebright",
        "USER": "root",
        "PASSWORD": "irnbru",
        "HOST": "localhost",
        "PORT": "",
    }
}

try:
    from .local import *
except ImportError:
    pass
