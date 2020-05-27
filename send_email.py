from email.mime.text import MIMEText
import smtplib

def send_email(fullname,email,password ):
    from_email="mj.mahi0206@gmail.com"
    from_password="Mahika@2012"
    to_email=email

    subject="Personal data"
    message="Hey <strong>%s</strong>, Thankyou for registering at Learning Portal. <br> Your email address is: <strong>%s</strong> <br>Your Password is: <strong>%s</strong><br>Please keep this information in a secure place for your records.<br> Thanks!" % (fullname,email,password)

    msg=MIMEText(message, 'html')
    msg['Subject']=subject
    msg['To']=to_email
    msg['From']=from_email

    gmail=smtplib.SMTP('smtp.gmail.com',587)
    gmail.ehlo()
    gmail.starttls()
    gmail.login(from_email, from_password)
    gmail.send_message(msg)
