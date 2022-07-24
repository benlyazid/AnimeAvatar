import requests
from bs4 import BeautifulSoup
import json

_response = requests.get('https://api.genderize.io/?name=peter')
data = BeautifulSoup(_response.content, "html.parser")
dataJson=json.loads(data.text)
print(dataJson)