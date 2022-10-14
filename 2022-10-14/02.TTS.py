from gtts import gTTS

text = 'Hello, Welcome to Microsoft AI school.'

tts = gTTS(text = text, lang='en')
tts.save('hi.mp3')