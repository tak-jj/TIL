from currency_converter import CurrencyConverter

cc = CurrencyConverter('http://www.ecb.europa.eu/stats/eurofxref/eurofxref.zip')

print(cc.convert(1,'USD','KRW'))
print(cc.convert(100,'JPY','KRW'))

import requests
from bs4 import BeautifulSoup
# 웹 크롤링 web crawling HTML 페이지를 가져와서, HTML/CSS등을 파싱하고, 필요한 데이터만 추출하는 기법

def get_exchange_rate(target1, target2):
    headers = {
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'text/html; charset=utf-8'
    }

    response = requests.get('https://kr.investing.com/currencies/{}-{}'.format(target1,target2), headers=headers)

    content = BeautifulSoup(response.content, 'html.parser')
    containers = content.find('span', {'data-test':'instrument-price-last'})

    print(containers.text)

get_exchange_rate('usd','krw')