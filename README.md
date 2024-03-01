# ember-data-test-date-transform

Welcome to the repo. This is a small Ember JS app that demonstrates an inconsistency within the Ember-data library specifically in date transform from v4.12.0 onwards.

## Problem

The issue arises when the Ember-data date transform triggers a change on the reload of a record even when the value remains the same. This behavior is not consistent with non-date attributes of the same record.

## Steps to Reproduce

- Pull the repo, run `yarn install`, run `yarn start`

- View the console for the output of the change event.

- A date attribute 'createdAt' is being logged every time the 'Reload record' button is clicked. 

- For comparison, the non-date attributes "name" (string transform) and "isFake" (boolean transform) are also logged at the same event.

- Notice that while 'createdAt' is logged every time on reload, the other attributes are not.

## Notes

The `application.hbs` file in this repo illustrates the bug in action:

```handlebars
{{page-title "TestEmberDataDateTransform"}}

{{#if this.model}}
  <p>Welcome, Ember Community Member!</p>
  <p>
    This is a demonstration that the <b>ember-data date transform (v4.12.0 onwards)</b> triggers a change on reload of the record
    even when the value remains same.
  </p>
  <p>
    The date is: {{this.model.createdAt}}    
  </p>
  <p>
    <b>See the console for the output of the change event.</b>
    "createdAt" is a date attribute, and it is being logged every time you click the button. But the attributes "name" and "isFake" are not being logged on reload.
  </p>

  {{log this.model.createdAt "createdAt"}}
  {{log this.model.name "name"}}
  {{log this.model.isFake "isFake"}}

  <p>
    <button onclick={{fn this.reloadModel this.model}}>
      Reload record
    </button>
  </p>
{{/if}}

{{outlet}}
```

I welcome your suggestions and feedback, and would be very appreciative of help in resolving this.
 
