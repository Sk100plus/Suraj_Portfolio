import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('access_key', 'fe907e31-8eef-4d24-8aba-21e3c3ab7665');
    formData.append('email', email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('Subscription successful! Please check your email.');
        setEmail('');  // Clear the email input on success
      } else {
        setStatus('error');
        setMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred while sending your subscription. Please try again.');
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br />& Never miss the latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
            {status && (
              <Alert variant={status === 'success' ? 'success' : 'danger'} className="mt-3">
                {message}
              </Alert>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
