## Object Relational Mapping for fibjs

[![Build Status](https://travis-ci.org/fibjs/fib-orm.svg)](https://travis-ci.org/fibjs/fib-orm)

## Install

```sh
npm install fib-orm
```

## Test

```sh
npm run ci
```

## DBMS Support

- MySQL & MariaDB
- SQLite

## Features

fib-orm add a set of synchronous version method on node-orm object.

## Introduction

This is a fibjs object relational mapping module.

An example:

```js
var orm = require("fib-orm");

var db = orm.connectSync("mysql://username:password@host/database");
var Person = db.define("person", {
	name      : String,
	surname   : String,
	age       : Number, // FLOAT
	male      : Boolean,
	continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
	photo     : Buffer, // BLOB/BINARY
	data      : Object // JSON encoded
}, {
	methods: {
		fullName: function () {
			return this.name + ' ' + this.surname;
		}
	},
	validations: {
		age: orm.enforce.ranges.number(18, undefined, "under-age")
	}
});

// add the table to the database
db.syncSync();

// add a row to the person table
Person.createSync({ id: 1, name: "John", surname: "Doe", age: 27 });

// query the person table by surname
var people = Person.findSync({ surname: "Doe" });
// SQL: "SELECT * FROM person WHERE surname = 'Doe'"

console.log("People found: %d", people.length);
console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

people[0].age = 16;
people[0].saveSync();
```

The node.js version like this:
```js
var orm = require("orm");

orm.connect("mysql://username:password@host/database", function (err, db) {
  if (err) throw err;

	var Person = db.define("person", {
		name      : String,
		surname   : String,
		age       : Number, // FLOAT
		male      : Boolean,
		continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
		photo     : Buffer, // BLOB/BINARY
		data      : Object // JSON encoded
	}, {
		methods: {
			fullName: function () {
				return this.name + ' ' + this.surname;
			}
		},
		validations: {
			age: orm.enforce.ranges.number(18, undefined, "under-age")
		}
	});

    // add the table to the database
	db.sync(function(err) {
		if (err) throw err;

		// add a row to the person table
		Person.create({ id: 1, name: "John", surname: "Doe", age: 27 }, function(err) {
			if (err) throw err;

				// query the person table by surname
				Person.find({ surname: "Doe" }, function (err, people) {
			        // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
		        	if (err) throw err;

			        console.log("People found: %d", people.length);
			        console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

			        people[0].age = 16;
			        people[0].save(function (err) {
			            // err.msg = "under-age";
		        });
		    });

		});
	});
});
```

## Documentation


Fibjs did not add new functions, the development of documents can refer to node-orm, only need to change the asynchronous call to synchronous version.  [wiki](https://github.com/dresende/node-orm2/wiki/).

## Settings

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Settings).

## Connecting

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Connecting-to-Database).

## Models

A Model is an abstraction over one or more database tables. Models support associations (more below). The name of the model is assumed to match the table name.

Models support behaviours for accessing and manipulating table data.

## Defining Models

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Defining-Models).

### Properties

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Model-Properties).

### Instance Methods

Are passed in during model definition.

```js
var Person = db.define('person', {
    name    : String,
    surname : String
}, {
    methods: {
        fullName: function () {
            return this.name + ' ' + this.surname;
        }
    }
});

var person = Person.getSync(4);
console.log( person.fullName() );
```

### Model Methods

Are defined directly on the model.

```js
var Person = db.define('person', {
    name    : String,
    height  : { type: 'integer' }
});
Person.tallerThan = function(height) {
    return this.findSync({ height: orm.gt(height) });
};

var tallPeople = Person.tallerThan( 192);
```


## Loading Models [NOT SUPPORT]

Models can be in separate modules. Simply ensure that the module holding the models uses module.exports to publish a function that accepts the database connection, then load your models however you like.

Note - using this technique you can have cascading loads.

```js
// your main file (after connecting)
db.loadSync("./models");
// loaded!
var Person = db.models.person;
var Pet    = db.models.pet;

// models.js
module.exports = function (db) {
    db.loadSync("./models-extra");
    db.define('person', {
        name : String
    });
};

// models-extra.js
module.exports = function (db) {
    db.define('pet', {
        name : String
    });
};
```

## Synchronizing Models

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Syncing-and-dropping-models).

## Dropping Models

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Syncing-and-dropping-models).

## Advanced Options

ORM2 allows you some advanced tweaks on your Model definitions. You can configure these via settings or in the call to `define` when you setup the Model.

For example, each Model instance has a unique ID in the database. This table column is added automatically, and called "id" by default.<br/>
If you define your own `key: true` column, "id" will not be added:

```js
var Person = db.define("person", {
	personId : { type: 'serial', key: true },
	name     : String
});

// You can also change the default "id" property name globally:
db.settings.set("properties.primary_key", "UID");

// ..and then define your Models
var Pet = db.define("pet", {
	name : String
});
```

**Pet** model will have 2 columns, an `UID` and a `name`.

It's also possible to have composite keys:

```js
var Person = db.define("person", {
	firstname : { type: 'text', key: true },
	lastname  : { type: 'text', key: true }
});
```

Other options:

- `identityCache`  : (default: `false`) Set it to `true` to enable identity cache ([Singletons](#singleton)) or set a timeout value (in seconds);
- `autoSave`       : (default: `false`) Set it to `true` to save an Instance right after changing any property;
- `autoFetch`      : (default: `false`) Set it to `true` to fetch associations when fetching an instance from the database;
- `autoFetchLimit` : (default: `1`) If `autoFetch` is enabled this defines how many hoops (associations of associations)
  you want it to automatically fetch.

## Hooks

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Model-Hooks).

## Finding Items

### Model.getSync(id, [ options ])

To get a specific element from the database use `Model.get`.

```js
var person = Person.getSync(123);
// finds person with id = 123
```

### Model.findSync([ conditions ] [, options ] [, limit ] [, order ])

Finding one or more elements has more options, each one can be given in no specific parameter order. Only `options` has to be after `conditions` (even if it's an empty object).

```js
var people = Person.findSync({ name: "John", surname: "Doe" }, 3);
// finds people with name='John' AND surname='Doe' and returns the first 3
```

If you need to sort the results because you're limiting or just because you want them sorted do:

```js
var people = Person.findSync({ surname: "Doe" }, "name");
// finds people with surname='Doe' and returns sorted by name ascending

people = Person.findSync({ surname: "Doe" }, [ "name", "Z" ]);
// finds people with surname='Doe' and returns sorted by name descending
// ('Z' means DESC; 'A' means ASC - default)
```

There are more options that you can pass to find something. These options are passed in a second object:

```js
var people = Person.findSync({ surname: "Doe" }, { offset: 2 });
// finds people with surname='Doe', skips the first 2 and returns the others
```

You can also use raw SQL when searching. It's documented in the *Chaining* section below.

### Model.countSync([ conditions])

If you just want to count the number of items that match a condition you can just use `.count()` instead of finding all
of them and counting. This will actually tell the database server to do a count (it won't be done in the node process itself).

```js
var count = Person.countSync({ surname: "Doe" });
console.log("We have %d Does in our db", count);
```

### Model.existsSync([ conditions])

Similar to `.count()`, this method just checks if the count is greater than zero or not.

```js
var exists = Person.existsSync({ surname: "Doe" });
console.log("We %s Does in our db", exists ? "have" : "don't have");
```

### Aggregating Functions


An `Array` of properties can be passed to select only a few properties. An `Object` is also accepted to define conditions.

Here's an example to illustrate how to use `.groupBy()`:

```js
//The same as "select avg(weight), age from person where country='someCountry' group by age;"
var stats = Person.aggregate(["age"], { country: "someCountry" }).avg("weight").groupBy("age").getSync();
// stats is an Array, each item should have 'age' and 'avg_weight'
```

### Base `.aggregate()` methods

- `.limit()`: you can pass a number as a limit, or two numbers as offset and limit respectively
- `.order()`: same as `Model.find().order()`

### Additional `.aggregate()` methods

- `min`
- `max`
- `avg`
- `sum`
- `count` (there's a shortcut to this - `Model.count`)

There are more aggregate functions depending on the driver (Math functions for example).

### Chaining

If you prefer less complicated syntax you can chain `.find()` by not giving a callback parameter.

```js
var people = Person.find({ surname: "Doe" }).limit(3).offset(2).only("name", "surname").runSync();
// finds people with surname='Doe', skips first 2 and limits to 3 elements,
// returning only 'name' and 'surname' properties
```
If you want to skip just one or two properties, you can call `.omit()` instead of `.only`.

Chaining allows for more complicated queries. For example, we can search by specifying custom SQL:
```js
Person.find({ age: 18 }).where("LOWER(surname) LIKE ?", ['dea%']).allSync( ... );
```
It's bad practice to manually escape SQL parameters as it's error prone and exposes your application to SQL injection.
The `?` syntax takes care of escaping for you, by safely substituting the question mark in the query with the parameters provided.
You can also chain multiple `where` clauses as needed.

`.find`, `.where` & `.all` do the same thing; they are all interchangeable and chainable.

You can also `order` or `orderRaw`:
```js
Person.find({ age: 18 }).order('-name').allSync( ... );
// see the 'Raw queries' section below for more details
Person.find({ age: 18 }).orderRaw("?? DESC", ['age']).allSync( ... );
```

You can also chain and just get the count in the end. In this case, offset, limit and order are ignored.

```js
var people = Person.find({ surname: "Doe" }).countSync();
// people = number of people with surname="Doe"
```

Also available is the option to remove the selected items.
Note that a chained remove will not run any hooks.

```js
Person.find({ surname: "Doe" }).removeSync();
// Does gone..
```

You can also make modifications to your instances using common Array traversal methods and save everything
in the end. [NOT SUPPORT]

```js
Person.find({ surname: "Doe" }).each(function (person) {
	person.surname = "Dean";
}).save(function (err) {
	// done!
});

Person.find({ surname: "Doe" }).each().filter(function (person) {
	return person.age >= 18;
}).sort(function (person1, person2) {
	return person1.age < person2.age;
}).get(function (people) {
	// get all people with at least 18 years, sorted by age
});
```

Of course you could do this directly on `.find()`, but for some more complicated tasks this can be very usefull.

`Model.find()` does not return an Array so you can't just chain directly. To start chaining you have to call
`.each()` (with an optional callback if you want to traverse the list). You can then use the common functions
`.filter()`, `.sort()` and `.forEach()` more than once.

In the end (or during the process..) you can call:
- `.countSync()` if you just want to know how many items there are;
- `.getSync()` to retrieve the list;
- `.saveSync()` to save all item changes.

#### Conditions

Conditions are defined as an object where every key is a property (table column). All keys are supposed
to be concatenated by the logical `AND`. Values are considered to match exactly, unless you're passing
an `Array`. In this case it is considered a list to compare the property with.

```js
{ col1: 123, col2: "foo" } // `col1` = 123 AND `col2` = 'foo'
{ col1: [ 1, 3, 5 ] } // `col1` IN (1, 3, 5)
```

If you need other comparisons, you have to use a special object created by some helper functions. Here are
a few examples to describe it:

```js
{ col1: orm.eq(123) } // `col1` = 123 (default)
{ col1: orm.ne(123) } // `col1` <> 123
{ col1: orm.gt(123) } // `col1` > 123
{ col1: orm.gte(123) } // `col1` >= 123
{ col1: orm.lt(123) } // `col1` < 123
{ col1: orm.lte(123) } // `col1` <= 123
{ col1: orm.between(123, 456) } // `col1` BETWEEN 123 AND 456
{ col1: orm.not_between(123, 456) } // `col1` NOT BETWEEN 123 AND 456
{ col1: orm.like(12 + "%") } // `col1` LIKE '12%'
{ col1: orm.not_like(12 + "%") } // `col1` NOT LIKE '12%'
{ col1: orm.not_in([1, 4, 8]) } // `col1` NOT IN (1, 4, 8)
```

#### Raw queries

```js
var data = db.driver.execQuerySync("SELECT id, email FROM user")

// You can escape identifiers and values.
// For identifier substitution use: ??
// For value substitution use: ?
var data = db.driver.execQuerySync(
  "SELECT user.??, user.?? FROM user WHERE user.?? LIKE ? AND user.?? > ?",
  ['id', 'name', 'name', 'john', 'id', 55])

// Identifiers don't need to be scaped most of the time
var data = db.driver.execQuerySync(
  "SELECT user.id, user.name FROM user WHERE user.name LIKE ? AND user.id > ?",
  ['john', 55])
```

### Identity pattern

You can use the identity pattern (turned off by default). If enabled, multiple different queries will result in the same result - you will
get the same object. If you have other systems that can change your database or you need to call some manual SQL queries,
you shouldn't use this feature. It is also know to cause some problems with complex
autofetch relationships. Use at your own risk.

It can be enabled/disabled per model:

```js
var Person = db.define('person', {
	name          : String
}, {
	identityCache : true
});
```

and also globally:

```js
var db = orm.connectSync('...');
db.settings.set('instance.identityCache', true);
```

The identity cache can be configured to expire after a period of time by passing in a number instead of a
boolean. The number will be considered the cache timeout in seconds (you can use floating point).

**Note**: One exception about Caching is that it won't be used if an instance is not saved. For example, if
you fetch a Person and then change it, while it doesn't get saved it won't be passed from Cache.

## Creating Items

### Model.createSync(items)

To insert new elements to the database use `Model.create`.

```js
var items = Person.createSync([
	{
		name: "John",
		surname: "Doe",
		age: 25,
		male: true
	},
	{
		name: "Liza",
		surname: "Kollan",
		age: 19,
		male: false
	}
]);
// items - array of inserted items
```

## Updating Items

Every item returned has the properties that were defined to the Model and also a couple of methods you can
use to change each item.

```js
var John = Person.getSync(1);
John.name = "Joe";
John.surname = "Doe";
John.saveSync();
console.log("saved!");
```

Updating and then saving an instance can be done in a single call:

```js
var John = Person.getSync(1);
John.saveSync({ name: "Joe", surname: "Doe" });
console.log("saved!");
```

If you want to remove an instance, just do:

```js
// you could do this without even fetching it, look at Chaining section above
var John = Person.getSync(1);
John.removeSync();
console.log("removed!");
```

## Validations

See information in the [wiki](https://github.com/dresende/node-orm2/wiki/Model-Validations).

## Associations

An association is a relation between one or more tables.

### hasOne

Is a **many to one** relationship. It's the same as **belongs to.**<br/>
Eg: `Animal.hasOne('owner', Person)`.<br/>
Animal can only have one owner, but Person can have many animals.<br/>
Animal will have the `owner_id` property automatically added.

The following functions will become available:
```js
animal.getOwnerSync()         // Gets owner
animal.setOwnerSync(person) // Sets owner_id
animal.hasOwnerSync()         // Checks if owner exists
animal.removeOwnerSync()                // Sets owner_id to 0
```

**Chain Find**

The hasOne association is also chain find compatible. Using the example above, we can do this to access a new instance of a ChainFind object:

```js
Animal.findByOwner({ /* options */ })
```

**Reverse access**

```js
Animal.hasOne('owner', Person, {reverse: 'pets'})
```

will add the following:

```js
// Instance methods
person.getPetsSync(function..)
person.setPetsSync(cat, function..)

// Model methods
Person.findByPets({ /* options */ }) // returns ChainFind object
```

### hasMany

Is a **many to many** relationship (includes join table).<br/>
Eg: `Patient.hasMany('doctors', Doctor, { why: String }, { reverse: 'patients', key: true })`.<br/>
Patient can have many different doctors. Each doctor can have many different patients.

This will create a join table `patient_doctors` when you call `Patient.sync()`:

 column name | type
 :-----------|:--------
 patient_id  | Integer (composite key)
 doctor_id   | Integer (composite key)
 why         | varchar(255)

The following functions will be available:

```js
patient.getDoctorsSync()           // List of doctors
patient.addDoctorsSync(docs)    // Adds entries to join table
patient.setDoctorsSync(docs)    // Removes existing entries in join table, adds new ones
patient.hasDoctorsSync(docs)    // Checks if patient is associated to specified doctors
patient.removeDoctorsSync(docs) // Removes specified doctors from join table

doctor.getPatientsSync()
etc...

// You can also do:
patient.doctors = [doc1, doc2];
patient.saveSync()
```

To associate a doctor to a patient:

```js
patient.addDoctorSync(surgeon, {why: "remove appendix"})
```

which will add `{patient_id: 4, doctor_id: 6, why: "remove appendix"}` to the join table.

#### getAccessor

This accessor in this type of association returns a `ChainFind` if not passing a callback. This means you can
do things like:

```js
var doctors = patient.getDoctors().order("name").offset(1).runSync());
// ... all doctors, ordered by name, excluding first one
```

### extendsTo

If you want to split maybe optional properties into different tables or collections. Every extension will be in a new table,
where the unique identifier of each row is the main model instance id. For example:

```js
var Person = db.define("person", {
    name : String
});
var PersonAddress = Person.extendsTo("address", {
    street : String,
    number : Number
});
```

This will create a table `person` with columns `id` and `name`. The extension will create a table `person_address` with
columns `person_id`, `street` and `number`. The methods available in the `Person` model are similar to an `hasOne`
association. In this example you would be able to call `.getAddress(cb)`, `.setAddress(Address, cb)`, ..

**Note:** you don't have to save the result from `Person.extendsTo`. It returns an extended model. You can use it to query
directly this extended table (and even find the related model) but that's up to you. If you only want to access it using the
original model you can just discard the return.

### Examples & options

If you have a relation of 1 to n, you should use `hasOne` (belongs to) association.

```js
var Person = db.define('person', {
    name : String
});
var Animal = db.define('animal', {
    name : String
});
Animal.hasOne("owner", Person); // creates column 'owner_id' in 'animal' table

// get animal with id = 123
var animal = Animal.getSync(123);
// animal is the animal model instance, if found
var person = animal.getOwnerSync();
// if animal has really an owner, person points to it
```

You can mark the `owner_id` field as required in the database by specifying the `required` option:
```js
Animal.hasOne("owner", Person, { required: true });
```

If a field is not required, but should be validated even if it is not present, then specify the `alwaysValidate` option.
(this can happen, for example when validation of a null field depends on other fields in the record)
```js
Animal.hasOne("owner", Person, { required: false, alwaysValidate: true });
```

If you prefer to use another name for the field (owner_id) you can change this parameter in the settings.

```js
db.settings.set("properties.association_key", "{field}_{name}"); // {name} will be replaced by 'owner' and {field} will be replaced by 'id' in this case
```

**Note: This has to be done before the association is specified.**

The `hasMany` associations can have additional properties in the association table.

```js
var Person = db.define('person', {
    name : String
});
Person.hasMany("friends", {
    rate : Number
}, {}, { key: true });

var John = Person.getSync(123);
var friends = John.getFriendsSync();
// assumes rate is another column on table person_friends
// you can access it by going to friends[N].extra.rate
```

If you prefer you can activate `autoFetch`.
This way associations are automatically fetched when you get or find instances of a model.

```js
var Person = db.define('person', {
  name : String
});
Person.hasMany("friends", {
    rate : Number
}, {
    key       : true, // Turns the foreign keys in the join table into a composite key
    autoFetch : true
});

var John = Person.getSync(123);
// no need to do John.getFriends() , John already has John.friends Array
```

You can also define this option globally instead of a per association basis.

```js
var Person = db.define('person', {
    name : String
}, {
    autoFetch : true
});
Person.hasMany("friends", {
    rate : Number
}, {
  key: true
});
```

Associations can make calls to the associated Model by using the `reverse` option. For example, if you have an
association from ModelA to ModelB, you can create an accessor in ModelB to get instances from ModelA.
Confusing? Look at the next example.

```js
var Pet = db.define('pet', {
    name : String
});
var Person = db.define('person', {
    name : String
});
Pet.hasOne("owner", Person, {
    reverse : "pets"
});

var pets = Person(4).getPetsSync();
// although the association was made on Pet,
// Person will have an accessor (getPets)
//
// In this example, ORM will fetch all pets
// whose owner_id = 4
```

This makes even more sense when having `hasMany` associations since you can manage the *many to many*
associations from both sides.

```js
var Pet = db.define('pet', {
    name : String
});
var Person = db.define('person', {
    name : String
});
Person.hasMany("pets", Pet, {
    bought  : Date
}, {
    key     : true,
    reverse : "owners"
});

Person(1).getPetsSync(...);
Pet(2).getOwnersSync(...);
```


## Transaction support

You can use low level transaction function to process db transcation.
```js
db.begin();
...
if(err)
    db.rollback();
else
    db.commit();
```
Or you can use trans to simpile process it.
```js
var result = db.trans(() => {
    ...
    return result;
});
```

## Adding external database adapters

To add an external database adapter to `orm`, call the `addAdapter` method, passing in the alias to use for connecting
with this adapter, along with the constructor for the adapter:

```js
require('orm').addAdapter('cassandra', CassandraAdapter);
```

See [the documentation for creating adapters](./Adapters.md) for more details.
