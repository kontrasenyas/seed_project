import React from "react";

import { BigBreadcrumbs, WidgetGrid, JarvisWidget } from "../../../common";

export default class About extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["About"]}
            icon="users"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12 col-md-12 col-lg-12">
              <JarvisWidget id="wid-id-0">
                <header>
                  <h2> Company Name</h2>
                </header>

                <div>
                  <div className="widget-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mattis arcu, nec fringilla urna fermentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque egestas aliquam metus sit amet tempor. Etiam placerat hendrerit pretium. Nulla facilisi. Cras ut sapien ac neque dapibus ultricies. Vivamus placerat hendrerit egestas. Etiam dignissim enim nec tincidunt pretium. Phasellus at nulla ac sem pulvinar tempor. Morbi mattis felis vel mauris posuere, at lacinia ante mollis.

Ut placerat consectetur risus a ultrices. In hac habitasse platea dictumst. Cras ut ligula gravida, fermentum tellus in, pretium ex. Fusce at magna lectus. Fusce eget risus orci. Nam nec ultrices ligula, ac tempus massa. Donec vitae orci rutrum, rhoncus nisl hendrerit, imperdiet sapien. Morbi mauris augue, luctus eu ligula id, ultrices rhoncus lorem. Vivamus mollis feugiat leo, sed elementum arcu sollicitudin in. Vivamus maximus faucibus lacus in suscipit. Fusce non porttitor lacus, at vestibulum turpis. Maecenas semper pretium tempor. Sed ultrices massa vitae odio imperdiet dictum. Sed molestie ipsum eget nunc rhoncus, non placerat ex euismod.

Integer sagittis accumsan leo non consectetur. Quisque sit amet turpis eu velit convallis mattis eu a urna. Vestibulum a elit sed sapien luctus sodales ac in tortor. Vivamus vehicula est nisi, sit amet bibendum tortor imperdiet in. Donec erat augue, convallis vestibulum neque sed, tempus lobortis justo. Duis accumsan ullamcorper nisi, egestas imperdiet est tincidunt nec. Donec tempor nulla vitae dignissim vehicula. Morbi sed odio dictum nibh tristique varius. Maecenas bibendum turpis ac consectetur aliquam. Mauris tincidunt nisl vel turpis gravida molestie. Nullam eleifend metus ac urna bibendum molestie. Cras ut tortor tincidunt, pretium ex id, vestibulum diam. Duis a lorem auctor, consectetur purus eu, venenatis urna. Maecenas volutpat mauris aliquam commodo dapibus. Donec sollicitudin urna sit amet ipsum gravida, non luctus ante suscipit. Sed posuere arcu eleifend dui rhoncus tincidunt.

Suspendisse maximus cursus ligula, et faucibus tortor consectetur ut. Phasellus feugiat nunc sed dolor tempor vehicula. Pellentesque finibus faucibus laoreet. Duis ultrices, ex eu vehicula fermentum, magna sapien dignissim augue, vel pulvinar mauris quam accumsan mi. Maecenas commodo lacus turpis, sed fermentum tortor pretium in. Praesent fermentum, odio accumsan aliquam bibendum, risus dui auctor nunc, ut convallis nulla sem eu erat. Sed tempor gravida lobortis.

Maecenas at gravida nulla. Vivamus pretium in urna a commodo. Nunc vulputate ex sit amet est fringilla, ac elementum sapien tempus. Fusce urna dui, blandit luctus vestibulum eu, fringilla sed turpis. Ut ac rhoncus elit. Maecenas eros orci, bibendum vel fringilla et, consequat ac ipsum. Quisque euismod turpis vitae ipsum faucibus, vel pellentesque nulla interdum. Morbi quis molestie arcu, consectetur vulputate enim. Nunc eget convallis mauris. Nam ornare eleifend erat, in fringilla est maximus a.


                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
