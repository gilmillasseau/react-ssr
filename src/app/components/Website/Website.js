import React from 'react';

class Website extends React.Component {

  handleClick = () => {
    return alert('click');
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <a href="http://google.pt">google</a>
          </nav>
        </header>

        <section>this is the content</section>

        <footer onClick={this.handleClick}>this is the footer</footer>
      </div>
    )
  }
}

export default Website;
