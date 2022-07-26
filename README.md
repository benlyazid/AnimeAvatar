

<p align="center">
  <img src="https://raw.githubusercontent.com/benlyazid/AnimeAvatar/master/FrontEnd/public/logo192.png" alt="ainme list avatars Logo">
</p>

# AnimeAvatar

AnimeAvatar is a open project web API that return an avatar image (225,225)Px based on your name and gender, and anime name,
this API is taking image from ```animelist```.
## Installation

To install and run the project
```
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

```json
  {
    "animeList" : [
       {
          "value": "Naruto_Shippuuden",
          "label": "Naruto Shippuuden"
       },
       {
          "value": "One_Piece",
          "label": "One Piece"
        },
        {
          "value": "One_Punch_Man",
          "label": "One Punch Man"
        }
      ],
    "numberOfAanime": 3
  }
```
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

After that in the Backend folder run ```nmp run webp``` to convert all the new Images that you add 
to webp format

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Benlyazid](https://www.github.com/benlyazid)
- [@kirwa-KO](https://www.github.com/kirwa-KO/)
