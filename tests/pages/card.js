import {
  create,
  visitable,
  clickable,
  fillable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/cards/1'),
  clickEdit: clickable(testSelector("edit")),
  changeTitle: fillable(".Edit-card__title"),
  clickSave: clickable(testSelector("save"))
});
