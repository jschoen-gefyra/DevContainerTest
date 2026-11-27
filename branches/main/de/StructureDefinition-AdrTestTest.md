# AdrTestTest - Schulungs-IG v0.1.0

## Datentyp-Profil: AdrTestTest 

**Usages:**

* This DataType Profile is not used by any profiles in this Specification

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/info.gefyra.training|current/StructureDefinition/StructureDefinition-AdrTestTest.json)

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

 

Weitere Repräsentationen des Profils: [CSV](../StructureDefinition-AdrTestTest.csv), [Excel](../StructureDefinition-AdrTestTest.xlsx), [Schematron](../StructureDefinition-AdrTestTest.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "AdrTestTest",
  "url" : "http://gefyra.info/training/StructureDefinition/AdrTestTest",
  "version" : "0.1.0",
  "name" : "AdrTestTest",
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
      "id" : "Address",
      "path" : "Address"
    },
    {
      "id" : "Address.extension",
      "path" : "Address.extension",
      "min" : 1
    },
    {
      "id" : "Address.extension:Ex1",
      "path" : "Address.extension",
      "sliceName" : "Ex1",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://gefyra.info/training/StructureDefinition/Ex"]
      }]
    }]
  }
}

```
