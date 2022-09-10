import React from "react";

export default function index() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          <a className="navbar-brand logo-image" href="index.html">
            <img src="images/logo.svg" alt="alternative" />
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#details">
                  Details <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>

      <div className="header">
        <div className="ocean">
          <div className="wave" />
          <div className="wave" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1 className="h1-large">
                  Gemdev is a free HTML template designed for your web products
                </h1>
                <p className="p-large">
                  Use Gemdev to create awesome websites for your products,
                  services and ideas in a short amount of time
                </p>
                <a className="btn-solid-lg page-scroll" href="#statement">
                  Discover
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/header-gem.svg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="statement" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h3>The framework is a solid foundation for websites</h3>
                <p className="p-large">
                  “I've designed this framwork based on my experience with
                  building websites for many types of industries. What's great
                  about Gemdev is that it can be used by anyone from absolute
                  beginners to skilled web developers from around the world”
                </p>
                <img src="images/statement.jpg" alt="alternative" />
                <h6>Donna Staple, Founder</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="details" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-1.svg"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <h2>Easy to download</h2>
                <p>
                  It takes no more than 10 minutes to download the framework,
                  set it up and start working on your project. You'll see
                  impressive results in a couple of hours
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      <strong>For startups</strong> which have less data and
                      operations
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      <strong>For big companies</strong> with a lot of data and
                      daily inputs
                    </div>
                  </li>
                </ul>
                <a
                  className="btn-solid-reg popup-with-move-anim"
                  href="#details-lightbox"
                >
                  Lightbox
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="col-lg-8">
            <div className="image-container">
              <img
                className="img-fluid"
                src="images/details-lightbox.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <h3>Goals Setting</h3>
            <hr />
            <p>
              The app can easily help you track your personal development
              evolution if you take the time to set it up.
            </p>
            <h4>User Feedback</h4>
            <p>
              This is a great app which can help you save time and make your
              live easier. And it will help improve your productivity.
            </p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-check" />
                <div className="media-body">Splash screen panel</div>
              </li>
              <li className="media">
                <i className="fas fa-check" />
                <div className="media-body">Statistics graph report</div>
              </li>
              <li className="media">
                <i className="fas fa-check" />
                <div className="media-body">Events calendar layout</div>
              </li>
              <li className="media">
                <i className="fas fa-check" />
                <div className="media-body">Location details screen</div>
              </li>
              <li className="media">
                <i className="fas fa-check" />
                <div className="media-body">Onboarding steps interface</div>
              </li>
            </ul>
            <a className="btn-solid-reg mfp-close page-scroll" href="#contact">
              Contact Us
            </a>
            <button
              className="btn-outline-reg mfp-close as-button"
              type="button"
            >
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of lightbox-basic */}
      {/* end of lightbox */}
      {/* end of details lightbox */}
      {/* Details 2 */}
      <div className="basic-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <h2>Simple to setup</h2>
                <p>
                  Gemdev is a well structured package and very easy to setup via
                  parameters. You can get it up and running with basic coding
                  skills. Don't hesitate to give it a try today
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      <strong>For designers</strong> which have less data and
                      operations
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      <strong>For developers</strong> with a lot of data and
                      daily inputs
                    </div>
                  </li>
                </ul>
                <a className="btn-solid-reg" href="#your-link">
                  Details
                </a>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-2.svg"
                  alt="alternative"
                />
              </div>
              {/* end of image-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-3 */}
      {/* end of details 2 */}
      {/* Features */}
      <div id="features" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-rocket" />
                <h4>Web framework</h4>
                <p>
                  Gemdev is a young and popular web framework designed to help
                  users build websites and web apps in half the time it would
                  take without it
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-images" />
                <h4>Unlimited components</h4>
                <p>
                  Browse the enormous component collection and find the right
                  parts for your online project. Cards, lists, image sliders,
                  everything you need
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-download" />
                <h4>Easy to download</h4>
                <p>
                  It's very easy to download Gemdev just login with your
                  credentials and click the green download button. The package
                  will download instantly
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-cog" />
                <h4>Simple to setup</h4>
                <p>
                  With basic coding skills you can configure Gemdev down to the
                  smallest detail. No more tutorials or browsing through
                  knowledge bases
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-file-alt" />
                <h4>Simple licensing</h4>
                <p>
                  We hear your pain and we're offering Gemdev under the MIT
                  license, which means you can use it for any kind of project
                  and for any number of times
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box bg-gray">
                <i className="fas fa-award" />
                <h4>Great results</h4>
                <p>
                  A lot of users have sent us positive feedback about the
                  framework. That means we are on to something good here so
                  we'll keep improving it
                </p>
              </div>
              {/* end of text-box */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-4 */}
      {/* end of features */}
      {/* About */}
      <div id="about" className="basic-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-container">
                <h2>Award wining framework</h2>
                <p>
                  Gemdev has been used in thousand of popular web projects. The
                  feedback has been great so we decided to keep working.
                </p>
                <p>
                  Naturally we can't please everyone because it's not our
                  objective to fit all styles. Our style is based on speed and
                  performance.
                </p>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/about.svg"
                  alt="alternative"
                />
              </div>
              {/* end of image-container */}
            </div>
            {/* end of col */}
            <div className="col-lg-4">
              <div className="text-container">
                <h2>Reasons to download</h2>
                <ul className="list-unstyled li-space-lg">
                  <li>
                    1. Very easy to download with minimum number of clicks and
                    no registration required
                  </li>
                  <li>
                    2. Large pool of components for any part of the project from
                    sliders to tabbed content
                  </li>
                  <li>
                    3. Simple licensing for any type and any number of projects.
                    Free MIT download
                  </li>
                </ul>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-5 */}
      {/* end of about */}
      {/* Statistics */}
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Counter */}
              <div id="counter">
                <div className="cell">
                  <div className="counter-value number-count" data-count={231}>
                    1
                  </div>
                  <p className="counter-info">Happy Users</p>
                </div>
                <div className="cell">
                  <div className="counter-value number-count" data-count={385}>
                    1
                  </div>
                  <p className="counter-info">Issues Solved</p>
                </div>
                <div className="cell">
                  <div className="counter-value number-count" data-count={159}>
                    1
                  </div>
                  <p className="counter-info">Good Reviews</p>
                </div>
                <div className="cell">
                  <div className="counter-value number-count" data-count={127}>
                    1
                  </div>
                  <p className="counter-info">Case Studies</p>
                </div>
                <div className="cell">
                  <div className="counter-value number-count" data-count={211}>
                    1
                  </div>
                  <p className="counter-info">Orders Received</p>
                </div>
              </div>
              {/* end of counter */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of counter */}
      {/* end of statistics */}
      {/* Invitation */}
      <div className="basic-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container bg-gray">
                <h4>
                  Gemdev is a well established web development framework
                  dedicated to creatives and makers
                </h4>
                <a className="btn-solid-lg" href="#your-link">
                  Details
                </a>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-6 */}
      {/* end of invitation */}
      {/* Contact */}
      <div id="contact" className="form-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Contact details</h2>
              <p className="p-heading">
                Don't hesitate to send your questions through the contact form
                or
                <a className="blue no-line" href="mailto:contact@gemdev.com">
                  contact@gemdev.com
                </a>
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Form */}
              <div className="form-container">
                <img
                  className="decoration"
                  src="images/contact-envelope.svg"
                  alt="alternative"
                />
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control-input"
                      id="cname"
                      required
                    />
                    <label className="label-control" htmlFor="cname">
                      Name
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control-input"
                      id="cemail"
                      required
                    />
                    <label className="label-control" htmlFor="cemail">
                      Email
                    </label>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control-textarea"
                      id="cmessage"
                      required
                      defaultValue={""}
                    />
                    <label className="label-control" htmlFor="cmessage">
                      Your message
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control-submit-button"
                    >
                      Submit Message
                    </button>
                  </div>
                </form>
              </div>
              {/* end of form-container */}
              {/* end of contact form */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of form-1 */}
      {/* end of contact */}
      {/* Footer */}
      <div className="footer bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="social-container">
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-facebook-f fa-stack-1x" />
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-twitter fa-stack-1x" />
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-pinterest-p fa-stack-1x" />
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-instagram fa-stack-1x" />
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-youtube fa-stack-1x" />
                  </a>
                </span>
              </div>
              {/* end of social-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of footer */}
      {/* end of footer */}
      {/* Copyright */}
      <div className="copyright bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright ©
                <a className="no-line" href="#your-link">
                  Your name
                </a>
              </p>
            </div>
            {/* end of col */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Distributed by:
                <a className="no-line" href="https://themewagon.com/">
                  Themewagon
                </a>
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* enf of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of copyright */}
      {/* end of copyright */}
      {/* Scripts */}
      {/* jQuery for Bootstrap's JavaScript plugins */}
      {/* Bootstrap framework */}
      {/* jQuery Easing for smooth scrolling between anchors */}
      {/* Swiper for image and text sliders */}
      {/* Magnific Popup for lightboxes */}
      {/* Custom scripts */}
    </div>
  );
}
