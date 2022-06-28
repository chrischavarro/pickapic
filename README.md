# Pick a Pic

This application allows users to search for images based on search terms. They can also upload images from their device - these images will show up under `server/uploads`

The server is set to return a fixed list of images based on the search terms 'capybara' and 'dog' - those are actually pictures of my puppy!
I chose to do this because returning the actual uploaded images would involve setting up an AWS S3 bucket to retrieve their respective URLS.
Otherwise, I'd be returning a network response with dozens if not more megabytes of data which isn't ideal.

If I had more time, I'd like to allow the users to include tags with their uploaded image, since the current implementation would mean the user would have to know the exact
name of the file, which isn't intuitive with image names such as 'IMG_221.jpg'. I would also implement the ability for users to save search responses and store them in the
cache for instant retrieval without making an additional network request.

## Running Locally

To run the server, navigate to the `server` folder and run

### `yarn start`

In the `src` directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
