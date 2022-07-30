from email.mime import image

import requests
from bs4 import BeautifulSoup
import urllib.request
import os
from PIL import Image, ImageEnhance
import json


def resizeImage(imagePath):
    try:
        image = Image.open(imagePath)
        box = (0, 0, 225, 225)
        cropped_image = image.crop(box)
        cropped_image.save(imagePath)
        image = Image.open(imagePath)
        color = ImageEnhance.Color(image)
        color.enhance(1.5).save(imagePath)
        return 1
    except:
        return 0


    #? URL should be in this form https://myanimelist.net/anime/{id}/{animeName}/characters // check myanimelist
    #? StoragePath Where To store images EX `./anime/OnePiece`
def scrapImages(URL, StoragePath):
    # ANIME_NAME = 'Naruto__Shippuuden'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    job_elements = soup.find_all("a", class_="fw-n")

    count = 1
    for element in job_elements:
        images = element.find_all('img')
        #? get charachter fullname
        charachterFullName = images[0]['alt']
        charachterName = charachterFullName.split()[-1]
        #? get charchter gender 
        _response = requests.get('https://api.genderize.io/?name=' + charachterName)
        data = BeautifulSoup(_response.content, "html.parser")
        dataJson=json.loads(data.text)
        charachterGender = 'male'
        if 'gender' in dataJson and dataJson['gender']: 
            charachterGender = dataJson['gender']
        elif 'gender' not in dataJson:
            print("you have reached the limit of 1000 request in day")
            return

        imgData = images[0]['data-srcset'] # get data inside the data-secret
        imgURL = imgData.split()[2] # get the second url with size  84 *124

        #? convert   url to get Hight Quality image
        #? transform from  https://cdn.myanimelist.net/r/84x124/images/characters/10/161005.jpg?s=7e43e5f6a540a2e6a3859660cafe5bba
        #? to              https://cdn.myanimelist.net/images/characters/10/161005.jpg

        urlSplited = imgURL.split('r/84x124')
        imgURL = urlSplited[0]
        urlSplitedPart_2 = urlSplited[1].split('?')[0]
        imgURL += urlSplitedPart_2
        print(dataJson)
        print(count, imgURL , charachterName, charachterGender)

        if "images/characters" in imgURL:
            img_data = requests.get(imgURL).content
            fileName = StoragePath + '/' + charachterGender + '/' + str(count) + '.jpg'
            if not os.path.exists(StoragePath + '/' + charachterGender):
                os.makedirs(StoragePath + '/' + charachterGender)
            with open(fileName, 'wb') as handler:
                handler.write(img_data)
            count += resizeImage(fileName)
            # return



url = 'https://myanimelist.net/anime/269/Bleach/characters'
storage  = '../anime/Bleach'
scrapImages(url, storage)

#? done For : Fullmetal_Alchemist_Brotherhood, Hunter_x_Hunter, One_Punch_Man, One_Piece, Naruto__Shippuuden Kimetsu_no_Yaiba