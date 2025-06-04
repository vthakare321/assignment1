import '../App.css'
import { FaRocket, FaLightbulb, FaCog } from 'react-icons/fa';
import room from'../images/room.png'

const features = [
  {
    icon: <FaRocket size={18} />,
    title: 'Explore ideas together',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
  {
    icon: <FaLightbulb size={18} />,
    title: 'Bring those ideas to life',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
  {
    icon: <FaCog size={18} />,
    title: 'Ship better outcomes',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
];

export default function ProductFeaturesDark() {
  return (
    <section className="py-5 px-3 feature-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="container col-md-6 mb-4 mb-md-0">
          <img src={room}/>
          </div>

          <div className="col-md-6">
            {features.map((feature, idx) => (
              <div key={idx} className="d-flex mb-4">
                <div className="icon-circle me-3">{feature.icon}</div>
                <div>
                  <h6 className="fw-bold mb-1 text-white">{feature.title}</h6>
                  <p className="text-light small mb-1">{feature.description}</p>
                  <a href="#" className="text-primary small text-decoration-none">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
