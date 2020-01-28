import React from 'react';

const BASE_URL = 'https://fiat-adapter.firebaseapp.com/';

const fiatAdapterContainer = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  textAlign: 'center',
  transition: 'opacity 0.2s ease-in-out',
  opacity: 1,
  pointerEvents: 'all',
};

const hidden = {
  opacity: 0,
  pointerEvents: 'none',
};

const embedded = {
  border: 'none',
  position: 'absolute',
  zIndex: '9999',
  top: 0,
  left: 0,
  width: '438px',
  overflow: 'hidden',
  borderRadius: '10px',
};

const popover = {
  border: 'none',
  boxShadow: '0 5px 10px 5px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
  position: 'relative',
  top: '50%',
  left: 0,
  width: '438px',
  transform: 'translateY(-50%)',
  borderRadius: '10px',
  overflow: hidden,
};

class FiatAdapter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 490,
    };

    window.addEventListener('message', (event) => {
      const origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
      if (origin === 'https://fiat-adapter.firebaseapp.com') {
        if (event.data.fiatAdapter && event.data.fiatAdapter === "CLOSE") {
          this.hide();
        }
        else if (event.data.fiatAdapter && event.data.fiatAdapter === "READY") {
          const frame = document.getElementById('fiat-adapter-widget');
          if (frame) {
            frame.contentWindow.postMessage('[iFrameSizer]fiat-adapter-widget:8:false:false:32:true:true:null:bodyOffset:null:null:0:false:child:scroll', '*');
          }
          else {
            this.postMessage();
          }
        }
        else if (event.data.includes('[iFrameSizer]')) {
          this.setState({ height: event.data.split(':')[1] });
        }
      }
    }, false);
  }

  hide() {
    this.props.onClose();
  }

  buildParams() {
    let params = "";
    if (this.props.logo) {
      params += ('&l=' + encodeURIComponent(this.props.logo));
    }
    if (this.props.name) {
      params += ('&n=' + encodeURIComponent(this.props.name));
    }
    if (this.props.message) {
      params += ('&m=' + encodeURIComponent(this.props.message));
    }
    if (this.props.address) {
      params += ('&add=' + encodeURIComponent(this.props.address));
    }
    if (this.props.wyreId) {
      params += ('&wid=' + encodeURIComponent(this.props.wyreId));
    }
    if (this.props.safelloId) {
      params += ('&sid=' + encodeURIComponent(this.props.safelloId));
    }
    if (this.props.carbonId) {
      params += ('&cid=' + encodeURIComponent(this.props.carbonId));
    }
    if (this.props.moonpayId) {
      params += ('&mid=' + encodeURIComponent(this.props.moonpayId));
    }
    if (this.props.preferredCurrency) {
      params += ('&pc=' + encodeURIComponent(this.props.preferredCurrency));
    }
    if (this.props.amount) {
      params += ('&a=' + encodeURIComponent(this.props.amount));
    }
    if (this.props.asset) {
      params += ('&ast=' + encodeURIComponent(this.props.asset));
    }
    if (this.props.redirectLink) {
      params += ('&r=' + encodeURIComponent(this.props.redirectLink));
    }
    if (this.props.unsupportedDiv) {
      params += ('&u=' + encodeURIComponent(this.props.unsupportedDiv));
    }
    if (this.props.unsupportedDiv) {
      params += ('&u=' + encodeURIComponent(this.props.unsupportedDiv));
    }
    if (this.props.allowedProviders) {
      params += ('&ap=' + encodeList(this.props.allowedProviders));
    }
    if (this.props.blockedProviders) {
      params += ('&bp=' + encodeList(this.props.blockedProviders));
    }
    if (this.props.allowedMethods) {
      params += ('&am=' + encodeList(this.props.allowedMethods));
    }
    if (this.props.blockedMethods) {
      params += ('&bm=' + encodeList(this.props.blockedMethods));
    }
    if (this.props.allowedCurrencies) {
      params += ('&acu=' + encodeList(this.props.allowedCurrencies));
    }
    if (this.props.blockedCurrencies) {
      params += ('&bcu=' + encodeList(this.props.blockedCurrencies));
    }
    if (this.props.allowedCryptos) {
      params += ('&acr=' + encodeList(this.props.allowedCryptos));
    }
    if (this.props.blockedCryptos) {
      params += ('&bcr=' + encodeList(this.props.blockedCryptos));
    }
    if (this.props.allowedRegions) {
      params += ('&ar=' + encodeList(this.props.allowedRegions));
    }
    if (this.props.blockedRegions) {
      params += ('&br=' + encodeList(this.props.blockedRegions));
    }
    if (this.props.allowedRegions) {
      params += ('&ar=' + encodeList(this.props.allowedRegions));
    }
    if (this.props.blockedRegions) {
      params += ('&br=' + encodeList(this.props.blockedRegions));
    }
    if (this.props.allowedStates) {
      params += ('&as=' + encodeList(this.props.allowedStates));
    }
    if (this.props.blockedStates) {
      params += ('&bs=' + encodeList(this.props.blockedStates));
    }
    if (this.props.allowedProvinces) {
      params += ('&apo=' + encodeList(this.props.allowedProvinces));
    }
    if (this.props.blockedProvinces) {
      params += ('&bpo=' + encodeList(this.props.blockedProvinces));
    }
    if (this.props.buyAllowed) {
      params += ('&ba=' + encodeURIComponent(this.props.buyAllowed));
    }
    if (this.props.sellAllowed) {
      params += ('&sa=' + encodeURIComponent(this.props.sellAllowed));
    }
    if (this.props.customRegions) {
      params += ('&cr=' + encodeList(this.props.customRegions));
    }
    if (this.props.sortMethod) {
      params += ('&sm=' + encodeURIComponent(this.props.sortMethod));
    }
    if (this.props.minimumLimit) {
      params += ('&ml=' + encodeURIComponent(this.props.minimumLimit));
    }
    if (params.length > 0) {
      params = '?' + params.substring(1);
    }
    else {
      params = '';
    }
    return params;
  }

  postMessage() {
    const frame = document.getElementById('fiat-adapter-widget');
    if (frame) {
      frame.contentWindow.postMessage('[iFrameSizer]fiat-adapter-widget:8:false:false:32:true:true:null:bodyOffset:null:null:0:false:child:scroll', '*');
    }
    else {
      setTimeout(() => {
        this.postMessage();
      }, 300);
    }
  }

  render() {
    const src = BASE_URL + this.buildParams();

    return (
      <div>
        {this.props.embed ? (
          <iframe
            id={"fiat-adapter-widget"}
            src={src}
            style={{ ...embedded, height: `${this.state.height}px` }}
          />
        ) : (
          <div style={this.props.open ? fiatAdapterContainer : {...fiatAdapterContainer, ...hidden}} onClick={() => this.hide()}>
            <iframe
              id={"fiat-adapter-widget"}
              src={src}
              style={{ ...popover, height: `${this.state.height}px` }}
            />
          </div>
        )}
      </div>
    );
  }

}

export default FiatAdapter;

