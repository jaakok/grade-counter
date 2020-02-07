This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Grade counter

This app will be used as a part of an info site for applying to universities of applied sciences in Finland. The app is still under development and will eventually be part of [ammattikorkeakouluun.fi](https://ammattikorkeakouluun.fi)

The purpose of the app is to count the possible entry level points for people applying to a UAS based on their high school grades

### Feel free to fork this app

App is licensed under MIT open source license and can be used by anyone. If you have any improvement suggestions for this app feel free to create a pull request or email me at `jaakko.ihanamaki@metropolia.fi`

## Following sections are purely for future developers at Valovirta Design

#### Installation
To run this app on your computer simply `git clone https://github.com/lollyyy/grade-counter.git`

Install necessary node modules with `npm install`

And see it in action with `npm start`

#### Details
All form elements are rendered using [Unform](https://github.com/Rocketseat/unform) library. The two different main components `vocForm.js` and `hsForm.js` work as the main entry points. The components' computational logic is located in `formHandler.js` in their respective folders and both forms have a separate file for scores. Navigation between the two forms is done with [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

#### Deployment to ammattikorkeakouluun.fi
The deployment of this app is a bit quirky because the app essentially needs to be embedded in a website and this solution seemed to be the fastest way at the time of creating the app.

To deploy this app you need access to ammattikorkeakouluun.fi Wordpress and SSH connection to Metropolia's servers.

* First create a build version of your app with `npm run-script build`
* Move the build folder in it's entirety to `/home/ammattikorkeakouluun/public_html/wp-content/themes/amk`
  * For this you can use whatever method you find the most convenient I've used `scp` command from Terminal
* Now move on to Wordpress and locate the `pistelaskuri` site from Pages > HTML Pages on the admin view
* Here you can see that the site is actually the `index.html` file of our React build with a slight modification where we get React itself as a `<script>` tag in the head section of the document
* Now all you have to do is update the file names of the two .js files at the bottom of the document
  * The js files follow the format of `/wp-content/themes/amk/build/static/js/2.b227eb50.chunk.js` so just update the file name to match the ones from the build
* The HTML Pages plugin generates a shortcode you can embed in any normal Wordpress page, the page that embeds this app can be found on Pages > All Pages > Todistusvalinnan pistelaskuri

### Swedish translation
A Swedish translation of this app exists [here](https://github.com/lollyyy/grade-counter-se), to deploy this app follow the steps above but copy the build folder inside `/home/ammattikorkeakouluun/public_html/wp-content/themes/amk/gc-swe`. Make sure to change the language to Swedish at the top of the Wordpress admin panel, the HTML Page for this is named `pistelaskuri-se` and the Wordpress page is "Poängräknare för den betygsbaserade antagningen"
