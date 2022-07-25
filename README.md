
![Logo](https://raw.githubusercontent.com/benlyazid/AnimeAvatar/master/FrontEnd/public/logo512.png)

# AnimeAvatar

AnimeAvatar is a open project web API that return an avatar image (225,225)Px based on your name and gender, and anime name,
this API is taking image from ```animelist```.
## Installation

To install and run the project
```bash
  cd BackEnd
  npm install 
  npm start
```
    
## API Reference

#### Get Your avatar image 

```
  GET /api/avatar?name=${_name}&gender=${_gneder}&animeName=${_anime}
```

| Parameter | Type      | Description                                       |
| :-------- | :-------  | :-------------------------------------------------|
| `_name`   | `string`  | **optional**: Your Name                           |
| `_gender` | `string`  | **optional**: Your Gender (male \|\| female)      |
| `_anime`  | `string`  | **optional**: what anime you wnat choose from it  |

That will return image for you.

PS: If you didn't set any of the above variables it will chose randome value for evry unseted variables.

#### Get all available anime
```
  GET /api/animelist/
```
This will return a JSON in this format :

```
  {
    animeList : [{
      "value":"Hunter_x_Hunter","label":"Hunter x Hunter",
      {"value":"Naruto_Shippuuden","label":"Naruto Shippuuden"}
    }],
    numberOfAanime:3
  }
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Add new Anime to the project
You can add any anime you whan't to the repo using the ```/scrapping/scrapper.py``` file 
you just need to set url and storage variables

Exemple
```
    url = 'https://myanimelist.net/anime/1735/Naruto__Shippuuden/characters'
    storage  = '../anime/Naruto_Shippuuden'
    you can get the url variable from animelist.net
    and change Naruto_Shippuuden by name of the anime in storage variable
```
Ps : The script can  download just 1000 image in day because it's use the ```api.genderize.io```
that is limited in 1000 request in day to select the gender of images.

After that you can run .....

