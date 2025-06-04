import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import chair from '../images/chair.png'

const features = [
  {
    title: 'Explore ideas together',
    description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
  {
    title: 'Bring those ideas to life',
    description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
  {
    title: 'Ship better outcomes',
    description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
  },
];

export default function ProductFeatures() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Redefining Product Features</h2>
        <p className="text-muted">
          Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence <br></br>
          on cross-platform integration.
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          {features.map((feature, idx) => (
            <div key={idx} className="d-flex mb-4">
              <div className="me-3">
                <FaRegDotCircle size={20} className="text-primary mt-1" />
              </div>
              <div>
                <h5 className="fw-semibold mb-1">{feature.title}</h5>
                <p className="text-muted mb-1">{feature.description}</p>
                <a href="#" className="text-primary text-decoration-none">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={chair}/>
        </div>
      </div>
    </section>
  );
}
