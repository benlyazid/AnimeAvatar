from PIL import Image, ImageEnhance



def resizeImage(imagePath):
    image = Image.open(imagePath)
    box = (0, 0, 225, 225)
    cropped_image = image.crop(box)
    cropped_image.save(imagePath)
    image = Image.open(imagePath)
    color = ImageEnhance.Color(image)
    color.enhance(1.5).save(imagePath)

    # Print size of cropped image
    # print(image.size) # Output: (500, 300)
    # print(cropped_image.size) # Output: (500, 300)

resizeImage('3.webp')
    