- See if you can get artists by genre // Not possible
- See if you can search for artists //

* Able to get albums by a certain artist
* Able to search whose name album or artist contain a certain keyword
* Able to search for artists based on a keyword
* Able to get artist's top tracks

Search -> Find song -> Select song -> Save to "playlist"

1. Select song

- event listener
- UI (button)
- Action to post (thunk)

2. post data to backend

- Data: Song and playlist id
- PLaylist router
- Route POST /playlists/:id/songs
- Save
- Return a response with song / playlist including the song

3. Update UI

- Get data back from backend (after you posted something)
- Put in redux
- Make a UI component to display what the use has selected / Saved

SUNDAY TASKs:

1. Be able to get userId for user_playlists // Done

   - Use auth middleware with post routers // Done

2. Connect user_playlist with playlist

   - Be able to add tracks to a playlist

3. Use tracks??

   - See how to connect tracks and playlist
