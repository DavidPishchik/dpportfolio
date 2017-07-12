PublicNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      items: {
        right: [
        //  { uid: 'login', href: '/login', label: 'Log In' },
          { uid: 'about', href: '#tf-about', label: 'About' },
          { uid: 'contact', href: '#tf-contact', label: 'Contact' }
        ]
      }
    };
  },
  render() {
    return <div className="public-navigation">
      <NavBarNav position={ `navbar-right` } items={ this.data.items.right } />

    </div>;
  }
});
