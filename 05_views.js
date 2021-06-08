// Wrapping views

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: "Welcome!",
  text: `Thank you for taking part in this mental rotation online experiment.
          <br/>
          <br/>
          Your effort and contribution to science are highly appreciated!`,
  buttonText: 'Continue to instructions'
});

const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `In the following, you will be taking part in a mental rotation experiment.
          <br />
          <br />
          In each trial, you will see 2 images. The images may show the same or different objects in slighty 
          different positions (i.e. rotated).
          <br/>
          <br/>
          Your task is to decide whether the shown objects are the <emph>same<emph/> or <emph>different<emph/>. 
          To do so, please carefully look at each image and compare the objects. You can answer via the press of a key 
          on your keyboard:
          <br/>
          <br/>
          <b>f: same object</b>
          <br/>
          <b>j: different object</b>
          <br\>
          <br\>
          Please answer as accurately and quickly as possible. In order to get you set, the experiment will start 
          with some test trials. Take your time and get familiar with the procedure, during the test trials 
          you will also directly receive feedback for your answers. You will receive a message once the actual trials 
          begin!`,
  buttonText: 'Start test trials'
});

const intermediate_wrapping = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "intermediate_wrapping",
  title: "Now the real thing",
  text: `Great, you are done with the practice trials! The actual experimental trials are next, so 
          make sure that you are all set and ready. Nothing changes for you, except that you won't get 
          feedback anymore for your answers now. Here's the key assignment again:
          <br/>
          <br/>
          <b>f: same object</b>
          <br/>
          <b>j: different object</b>
          <br\>
          <br\>
          Remember to try to be both fast and accurate when answering.`,
  buttonText: "Start trials"
});

const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// Don't delete! Required for submitting data
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

// Trial views

const practice = magpieViews.view_generator("key_press", {
  trials: practice_trials.key_press.length,
  data: _.shuffle(practice_trials.key_press),
  name: "practice",
  pause: 250,
  // response feedback doesn't work?
  hook: {
    after_response_enabled: check_response
  }
});

const main = magpieViews.view_generator("key_press", {
  trials: main_trials.key_press.length,
  data: _.shuffle(main_trials.key_press),
  name: "main",
  pause: 250,
  // time limit doesn't work?
  hook: {
    after_stim_shown: time_limit
  }
})