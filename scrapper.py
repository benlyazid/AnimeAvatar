import requests
from bs4 import BeautifulSoup
import urllib.request
import os
from PIL import Image, ImageEnhance

def resizeImage(imagePath):
    # image = image.convert('RGB')
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

URL = "https://myanimelist.net/anime/21/One_Piece/characters"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

job_elements = soup.find_all("a", class_="fw-n")

count = 1


for element in job_elements:

    images = element.find_all('img')
    imgData = images[0]['data-srcset'] # get data inside the data-secret
    imgURL = imgData.split()[2] # get the second url with size  84 *124

    #convert url to get Hight Quality image

    # transform from  https://cdn.myanimelist.net/r/84x124/images/characters/10/161005.jpg?s=7e43e5f6a540a2e6a3859660cafe5bba
    
    # to              https://cdn.myanimelist.net/images/characters/10/161005.jpg

    urlSplited = imgURL.split('r/84x124')
    imgURL = urlSplited[0]
    urlSplitedPart_2 = urlSplited[1].split('?')[0]
    imgURL += urlSplitedPart_2
    print(imgURL , count)

    if "images/characters" in imgURL:
        img_data = requests.get(imgURL).content
        dirIndex = int(count / 50)
        fileName = './OnePieceAvatar/' + str(count) + '.jpg'
        fileDir = './OnePieceAvatar'
        if not os.path.exists(fileDir):
            os.makedirs(fileDir)
        with open(fileName, 'wb') as handler:
            handler.write(img_data)
        count += resizeImage(fileName)


