import Image from "next/image"
import Link from "next/link"

function HomePage(){
  return(
  <div>
   <div id="video-container">
    <video
      src="/video.mp4"
      autoPlay
      loop
      muted
      id="video"
    />
    </div>
  
 
<div id="fronttext">
     <h1 id="heading">Wellcome to SynapticAI</h1>
     <p id="wellcomeinnertext"><blockquote>
    Explore the limitless possibilities of artificial intelligence and experience innovation like never before.
     </blockquote></p>
     <div id="main-text">
        <p id="text">Welcome to  <i id="para-links">SynapticAI</i> , a  platform inspired by the neural pathways of the human brain.
          Our mission is to bring the intelligence of machines closer tohuman-like decision-making through advanced
          deep learning and neural. <br /><br />
          At our core, we replicate the adaptive nature of human synapses-learning from data,
          strengthening over time, and continuously evolving. <br /><br />
          Our platform is designed to solve complex problems, uncover hidden patterns,
          and provide insights that empower businesses, researchers, and developers to achieve
          groundbreaking innovations.  <Link href="/aboutPage" id="para-links">About Us</Link>
        </p> 
        <img src="/side_robot.jpg" alt="side-robot" id="side-robot" />
        
      </div>
      <span id="startbtn">
         <button id="getstartbtn">Get started</button>
         </span>
       </div>
       <div>

       <h1 id="portfoliohadding">our portfolio</h1>
       <ul id="portfolios">
        <li>
        <div id="port" >
        <div>
        <Image
         src="/language.png"
         alt="Natural Language Processing for Customer Support" 
         width={400}
         height={300}
         id="portimg"
         priority
         />
        <h4 id="main-portfolio">Natural Language Processing (NLP) projects</h4>
        </div>
        </div>
        <div id="innerportimg-div">
        <ul id="innerportfolio">
          <li>
          <div>
          <Image
            src="/Sentiment.png"
            alt="Sentiment Analysis Tool" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Sentiment Analysis Tool</h3>
        <p id="innerportinfopara"> Analyze customer feedback and social media posts to determine sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
          </li>
          {/* li2 */}
          <li>
          <div>
          <Image
            src="/summarization.jpg"
            alt="Document Summarization Tool" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3">Document Summarization Tool</h3>
        <p id="innerportinfopara">Automatically generate concise summaries of lengthy documents.</p>
        <p><h5> Key Features:</h5>Customizable summary length, keyword extraction</p>
        <p><h5> Technologies:</h5> Hugging Face Transformers, BERT, spaCy.</p>
         </div>

         </div>
          </li>
          {/* li3 */}
          <li>
          <div>
          <Image
            src="/Chatbot.jpg"
            alt="Chatbot for Technical Support" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3">Chatbot for Technical Support </h3>
        <p id="innerportinfopara">AI chatbot for handling customer service inquiries in tech support. </p>
        <p><h5> Key Features:</h5> Context-aware responses, live agent handoff, sentiment detection.</p>
        <p><h5> Technologies:</h5>GPT-based models, Dialogflow, Flask. </p>
         </div>

         </div>
          </li>
          {/* li4 */}
          <li>
          <div>
          <Image
            src="/nameAntity.jpg"
            alt="Named Entity Recognition " 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Named Entity Recognition</h3>
        <p id="innerportinfopara"> Extract key entities (names, places, dates) from unstructured text.</p>
        <p><h5> Key Features:</h5> Entity classification, integration with databases.</p>
        <p><h5> Technologies:</h5> spaCy, NLTK, PyTorch.</p>
         </div>

         </div>
          </li>
          {/* li5 */}
          <li>
          <div>
          <Image
            src="/Sentiment.png"
            alt="" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Sentiment Analysis Tool</h3>
        <p id="innerportinfopara"> Analyze customer feedback and social media posts to determine sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
          </li>
          {/* li6 */}
          <li>
          <div>
          <Image
            src="/Sentiment.png"
            alt="" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Sentiment Analysis Tool</h3>
        <p id="innerportinfopara"> Analyze customer feedback and social media posts to determine sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
        </li>
        </ul>
        </div>
        </li>
        <li>
        <div id="port" >
        <div>
        <Image
         src="/computer-vision-AI.webp"
         alt="computer-vision-AI" 
         width={400}
         height={300}
         id="portimg"
         priority
         />
        <h4 id="main-portfolio">Computer Vision Projects</h4>
        </div>
        </div>
        <div id="innerportimg-div">
        <ul id="innerportfolio">
          <li>
          <div>
          <Image
            src="/health.jpg"
            alt=" Medical Image Diagnosis AI" 
            width={280}
            height={320}
            id="innerportimg"
            priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Medical Image Diagnosis AI</h3>
        <p> Assist radiologists by detecting anomalies in X-ray and MRI images.</p>
        <p><h5> Key Features:</h5> Automated diagnosis, explainable AI.</p>
        <p><h5> Technologies:</h5> TensorFlow, Keras, Medical Image Analysis Toolkit.</p>
        
         </div>

         </div>
          </li>
          {/* li2 */}
          <li>
          <div>
          <Image
            src="/mechanics.jpg"
            alt="Predictive Maintenance for Manufacturing" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Predictive Maintenance for Manufacturing</h3>
        <p id="innerportinfopara">customer feedback posts to determine sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
          </li>
          {/* li3 */}
          <li>
          <div>
          <Image
            src="/industries.webp"
            alt="Smart Energy Management for Industrial Facilities" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Smart Energy Management for Industrial Facilities</h3>
        <p id="innerportinfopara">customer feedback and social media posts to sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
          </li>
          {/* li4 */}
          <li>
          <div>
          <Image
            src="/Sentiment.png"
            alt="" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Sentiment Analysis Tool</h3>
        <p id="innerportinfopara"> Analyze customer feedback and social media posts to determine sentiment.</p>
        <p><h5> Key Features:</h5> Real-time processing, multilingual support.</p>
        <p><h5> Technologies:</h5> Python, NLTK, TensorFlow.</p>
         </div>

         </div>
          </li>

        </ul>
        </div>
        


        </li>
        <li>
        <div id="port" >
        <div>
        <Image
         src="/AI-chatbot.jpg"
         alt="AI Chatbot Projects" 
         width={400}
         height={300}
         id="portimg"
         priority
         />
        <h4 id="main-portfolio">AI Chatbot Projects</h4>
        </div>
        </div>
        <div id="innerportimg-div">
        <ul id="innerportfolio">
          <li>
          <div>
          <Image
            src="/healthcare.webp"
            alt="Sentiment Analysis Tool" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3"> Healthcare Assistant Chatbot</h3>
        <p id="innerportinfopara"> Virtual assistant to answer health-related queries and schedule appointments.</p>
        <p><h5> Key Features:</h5> Symptom analysis, integration with electronic health records.</p>
        <p><h5> Technologies:</h5> Python, Rasa, TensorFlow.</p>
         </div>

         </div>
          </li>
          {/* li2 */}
          <li>
          <div>
          <Image
            src="/multilingual.jpeg"
            alt="Multilingual Customer Support Chatbot" 
            width={280}
            height={320}
            id="innerportimg"
             priority
         />
         <div id="innerportinfo">
        <h3 id="innerporth3">Multilingual Customer Support Chatbot</h3>
        <p id="innerportinfopara">Chatbot provides support in languages for e-commerce.</p>
        <p><h5> Key Features:</h5>24/7 availability, context-aware conversations.</p>
        <p><h5> Technologies:</h5>Dialogflow, GPT-based models, AWS Lambda.</p>
         </div>

         </div>
          </li>
        </ul>
        </div>
        </li>
       </ul>
  </div>
  </div>
)
}
export default HomePage
