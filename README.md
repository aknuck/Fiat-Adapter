
## Installation

`$ npm install fiat-adapter`

## Usage

```
import FiatAdapter from 'fiat-adapter';

...

<FiatAdapter
  open={this.state.fiatAdapterOpen}
  onClose={() => this.setState({ fiatAdapterOpen: false })
/>
```

## Customization

See here for customization options: <https://github.com/dolomite-exchange/Fiat-Adapter>

Pass in your custom options as props to FiatAdapter

```
