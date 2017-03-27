import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-testing-training/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import cardPage from '../pages/card';

moduleForAcceptance('Acceptance | card view');

test('Should be able to view card', function(assert) {
  let list = server.create('list', {name: "To Do"});
  server.create('card', {
    list,
    title: "My first card"
  });
  visit('/');
  click("a:contains('My first card')");

  andThen(() => {
    assert.equal(find(testSelector("title")).text().trim(), "My first card");
  });
});

test('I should see the cards description', function(assert){
  let list = server.create('list', {name: "To Do"});
  server.create('card', {
    list,
    title: "My first card",
    description: "The first card"
  });
  visit("/cards/1");

  andThen(() => {
    assert.equal(find(".Big-card__description").text().trim(), "The first card");
  });
});

test('I should be able to edit a card', function(assert){
  let list = server.create('list', {name: "To Do"});
  server.create('card', {
    list,
    title: "My first card",
    description: "The first card"
  });

  cardPage
    .visit()
    .clickEdit()
    .changeTitle("New title")
    .clickSave();

  andThen(() => {
    assert.equal(find(testSelector("title")).text().trim(), "New title");
  });
});
