# MeineAdresse - Schulungs-IG v0.1.0

## Datentyp-Profil: MeineAdresse 

**Usages:**

* Use this DataType Profile: [MeinPatient](StructureDefinition-MeinPatient.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/info.gefyra.training|current/StructureDefinition/StructureDefinition-MeineAdresse.json)

### Formale Ansichten des Profilinhalts

 [Beschreibung von Profilen, Differentials, Snapshots und deren Repräsentationen](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Schlüsselelemente-Tabelle](#tabs-key) 
*  [Differential-Tabelle](#tabs-diff) 
*  [Snapshot-Tabelle](#tabs-snap) 
*  [Statistiken/Referenzen](#tabs-summ) 
*  [Alle](#tabs-all) 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Address](http://hl7.org/fhir/R4/datatypes.html#Address) 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Address](http://hl7.org/fhir/R4/datatypes.html#Address) 

 **Schlüsselelemente-Ansicht** 

#### Terminology Bindings

#### Constraints

 **Differential-Ansicht** 

Diese Struktur ist abgeleitet von [Address](http://hl7.org/fhir/R4/datatypes.html#Address) 

 **Snapshot-AnsichtView** 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Address](http://hl7.org/fhir/R4/datatypes.html#Address) 

 

Weitere Repräsentationen des Profils: [CSV](../StructureDefinition-MeineAdresse.csv), [Excel](../StructureDefinition-MeineAdresse.xlsx), [Schematron](../StructureDefinition-MeineAdresse.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "MeineAdresse",
  "url" : "http://gefyra.info/training/StructureDefinition/MeineAdresse",
  "version" : "0.1.0",
  "name" : "MeineAdresse",
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
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "vcard",
    "uri" : "http://w3.org/vcard",
    "name" : "vCard Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "type" : "Address",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Address",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Address.extension",
      "path" : "Address.extension",
      "min" : 2
    },
    {
      "id" : "Address.extension:planet",
      "path" : "Address.extension",
      "sliceName" : "planet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://gefyra.info/training/StructureDefinition/Planet"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Address.extension:Quadrant",
      "path" : "Address.extension",
      "sliceName" : "Quadrant",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://gefyra.info/training/StructureDefinition/Quadrant"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Address.line",
      "path" : "Address.line",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Address.city",
      "path" : "Address.city",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Address.postalCode",
      "path" : "Address.postalCode",
      "mustSupport" : true
    }]
  }
}

```
