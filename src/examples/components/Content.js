import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import smoothJump from '../../smooth-jumper';

export default class Content extends Component {

  handleScrollBottomClick(e) {
    e.preventDefault();

    smoothJump(this.refs.container, this.refs.bottom, 1000);
  }

  handleScrollTopClick(e) {
    e.preventDefault();

    smoothJump(this.refs.container, this.refs.three, 1000);
  }

  render() {
    return (
      <div className="container__inner" ref="container">
        <h1>Hello</h1>

        <h3>Welcome to a simple example of Webpack with React and SCSS.</h3>

        <a href="#" onClick={this.handleScrollBottomClick.bind(this)}>Scroll to the second to last paragraph</a>

        <p>1. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>2. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <p ref="three">3. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>4. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <p>5. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>6. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <p>7. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>8. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <p>9. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>10. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <p>11. Lorem ipsum dolor sit amet, ex mei magna omnium, vitae tritani qui ea, vim et veniam verterem perfecto. Libris eleifend theophrastus ad eum, ne dicta inciderint sit. Aeque patrioque ut eum. Qui nonumy minimum eu. Nam homero ceteros ad. Augue scripta pertinacia no duo, sed cu impetus invenire, no qui duis electram liberavisse.</p>

        <p>12. Te dictas percipitur nam, nobis fuisset noluisse quo et, ut eos insolens persecuti efficiendi. Ea illum accusamus mea, mea at dico delectus. Te vis detracto invidunt disputando. Cu per ullum legimus maluisset. Pro dicta perfecto temporibus ut, error ignota vocent sed ei. Per no interesset deterruisset. Vis animal dolorum adversarium te, vel an legimus fierent invidunt.</p>

        <a href="#" onClick={this.handleScrollTopClick.bind(this)}>Scroll to the third paragraph</a>

        <p ref="bottom">13. Eu sit eripuit imperdiet posidonium. Autem scripserit sed te, tritani virtute suscipiantur et qui. No errem possim tritani vix. Mea ignota audire te, at atqui scaevola nec. Sit harum movet at, sed ei lorem indoctum periculis, sea no molestie patrioque.</p>

        <p>14. Eu sit eripuit imperdiet posidonium. Autem scripserit sed te, tritani virtute suscipiantur et qui. No errem possim tritani vix. Mea ignota audire te, at atqui scaevola nec. Sit harum movet at, sed ei lorem indoctum periculis, sea no molestie patrioque.</p>
      </div>
    );
  }
}
