# QuadrantVS - Schulungs-IG v0.1.0

## ValueSet: 

 **References** 

* [Quadrant](StructureDefinition-Quadrant.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Beschreibung der obigen Tabelle(n)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "QuadrantVS",
  "url" : "http://gefyra.info/training/ValueSet/QuadrantVS",
  "version" : "0.1.0",
  "name" : "QuadrantVS",
  "status" : "draft",
  "date" : "2026-11-27T11:50:37+00:00",
  "publisher" : "Gefyra GmbH",
  "contact" : [{
    "name" : "Gefyra GmbH",
    "telecom" : [{
      "system" : "url",
      "value" : "https://gefyra.info/"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://gefyra.info/training/CodeSystem/QuadrantCS"
    }]
  }
}

```
