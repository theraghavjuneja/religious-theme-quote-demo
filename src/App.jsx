import { useRef } from 'react';
import './style.css';

function AffirmationsPage() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: 'affirmations.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    if (typeof html2pdf === 'function') {
      html2pdf().set(opt).from(element).save();
    }
  };

  const backgroundStyle = {
    backgroundImage:
      "url('https://www.brahmakumaris.com/wp-content/uploads/2021/09/lq_GA-23-1-768x512.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="min-h-screen p-8">
      <div
        className="max-w-4xl mx-auto rounded-lg shadow-lg p-8"
        ref={contentRef}
        style={{
          ...backgroundStyle,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), ' +
            backgroundStyle.backgroundImage,
        }}
      >
        <header className="text-center mb-8">
          <h1
            className="text-3xl font-bold text-orange-800 drop-shadow-lg"
            style={{ textShadow: '0px 0px 3px white' }}
          >
            सकारात्मक संकल्प
          </h1>
        </header>

        <div className="space-y-8">
          <div className="border-2 border-black p-6 rounded-lg bg-white bg-opacity-60">
            <p className="text-center font-bold text-lg">
              सुबह उठते ही और रात को सोने से पहले हमारा अवचेतन मन सबसे ज़्यादा एक्टिव होता है। 
              इसलिए हम अगर उस समय पर अच्छे संकल्प करेंगे तो वो हमारे संकल्प सिद्ध होंगे।
            </p>
          </div>

          <div className="bg-white bg-opacity-60 p-4 rounded shadow-md">
            <h2 className="font-bold text-xl mb-4">
              सुबह उठते ही पहले 10 मिनट और रात को सोने से पहले ये संकल्प करें:
            </h2>
            <ul className="space-y-1.5 list-decimal pl-8">
              <li>पर्मात्मा आपका शुक्रिया, आपने मुझे सब कुछ दिया है।</li>
              <li>मैं शक्तिशाली आत्मा हूँ क्योंकि भगवान मेरे साथ है।</li>
              <li>मैं मास्टर सर्वशक्तिवान हूँ, भगवान के सारी शक्ति मेरे पास है।</li>
              <li>परमात्मा की लाइट का सुरक्षा कवच मेरे शरीर के चारो तरफ है।</li>
              <li>मैं सदा खुश हूँ, मैं सभी को खुशियां बाटने वाली आत्मा हूँ।</li>
              <li>आज से मेरे साथ बहुत अच्छा होगा, मैं बहुत भाग्यशाली आत्मा हूँ।</li>
              <li>मैं निश्चिन्त हूँ, मैंने अपना सारा बोझ, चिंता, परेशानी, भगवान को दे दी है।</li>
              <li>आज का दिन मेरे लिए एक नया अवसर है – मैं इसे सकारात्मक रूप से जिऊँगा।</li>
              <li>मेरा पूरा शरीर स्वस्थ है। मैं हमेशा स्वस्थ रहूँगा।</li>
              <li>मेरा भाग्य चमक रहा है।</li>
              <li>मैं दूसरों के प्रति प्रेम, दया और सहानुभूति रखूँगा।</li>
              <li>मैं अपने लक्ष्यों के प्रति समर्पित रहूँगा और आलस्य से दूर रहूंगा।</li>
              <li>मैं स्वयं को क्षमा करता हूँ और दूसरों को भी क्षमा करता हूँ।</li>
              <li>मैं तनाव और चिंता को छोड़कर शांतिपूर्वक सोऊँगा।</li>
              <li>कल एक नया और बेहतर दिन होगा!</li>
              <li>मैं आत्मविकास की दिशा में प्रतिदिन एक कदम आगे बढ़ रहा हूँ।</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-60 p-4 rounded shadow-md">
            <h2 className="font-bold text-xl mb-4">संकल्प स्टुडेंट्स के लिए:</h2>
            <ul className="space-y-1.5 list-decimal pl-8">
              <li>
                <strong>(कोई भी पढ़ाई पढ़ने से पहले यहें बोले)-</strong> 
                मैं आत्मा, मन बुद्धी की मालिक हूँ, हे बुद्धी, जो पढ़ाया जाए उसे साथ-साथ याद कर लेना!
              </li>
              <li>
                <strong>(इंट्रव्यू देने या कोई इग्जाम देने से पहले यह बोले)-</strong> 
                मैं सर्वशक्तिवान की संतान, मास्टर सर्वशक्तिवान हूँ। 
                सफलता पाना मेरा जन्मसिद्ध अधिकार है। सफलता तो मेरी हुई पड़ी है।
              </li>
              <li>
                वही प्रश्न पुछे जाएंगे जिनके जवाब मुझे आते हैं। 
                मैं नोलेज़फुल आत्मा हूँ, सभी प्रश्नों के जवाब मुझे आते हैं।
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-60 p-4 rounded shadow-md mt-8">
            <p className="text-center font-bold text-lg">
              आप गांव या शहर में जहां भी रहते हैं, आपके आसपास ओमशान्ति ब्रह्मकुमारी सेंटर जरूर मिलेगा। 
              वहाँ आप नीशुल्क सात दिन का कोर्स करके 21 दिन में सभी परिशानी से छुटकारा पाएं, 
              मेडिटेशन करना सीखें और परमात्मा का परिचय पाएं।
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return <AffirmationsPage />;
}
