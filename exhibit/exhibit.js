{
       types: {
           "Person": {
               pluralLabel:  "People"
           }
       },
       properties: {
           "age": {
               valueType:    "number"
           },
           "parentOf": {
               label:        "parent of",
               reverseLabel: "child of",
               valueType:    "item"
           }
       },
       items: [
           {   label:        "John Doe",
               type:         "Person",
               parentOf:     "Jane Smith"
           },
           {   label:        "Jane Smith",
               type:         "Person"
           }
       ]
   }
