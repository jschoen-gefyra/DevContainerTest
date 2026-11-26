//unhandliche bzw. häufig benötigte Strings können zu Aliasen verkürzt werden, z.B. die canonical des ValueSets für Aufgabe 5
Alias: $SpeciesVS = http://fhir.ufp/ValueSet/species


//Planet-Extension zu Aufgabe 1. Sollte hier eigentlich nicht nochmal spezifiziert werden müssen, da aber bei einigen FSH-Tools das Einbinden von Dependencies nicht ohne weiteres möglich ist - und als Beispiel, wir Extensions mit primitiven Datentypen definiert werden - wurde die Spezifikation hier nochmal eingefügt.
Extension: Planet
Id: Planet
Description: "Extension for DataType `Address` to add information about the planet on which the address is located."
// Ohne ^url: die Kopie bekommt die Canonical dieses IG. Die URL http://fhir.ufp/StructureDefinition/planet
// gehört der Extension in ufp.core - eine zweite Definition darunter ist im IG Publisher ein Fehler.
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

// Profil zu Aufgabe 1
Profile: MeineAdresse
Parent: Address
Id: MeineAdresse
// Festlegung von Pflichtfeldern und MustSupport-Flags (Aufgabe 2)
* line 1.. MS
* city 1.. MS
* postalCode MS
// Einbinden der Planet-Extension und Zuweisung eines Namens sowie der Kardinalität und einem MustSupport-Flag
* extension contains Planet named planet 1..1 MS and Quadrant named Quadrant 1..1 MS


// CodeSystem zu Aufgabe 3
CodeSystem: QuadrantCS
* insert Autoren
* #alpha "Alpha-Quadrant"
* #beta "Beta-Quadrant"
* #gamma "Gamma-Quadrant"
* #delta "Delta-Quadrant"

// ValueSet zu Aufgabe 3
ValueSet: QuadrantVS
* insert Autoren
* include codes from system QuadrantCS

// Extension zu Aufgabe 4
Extension: Quadrant
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only code
* value[x] from QuadrantVS (required)

// Extension zu Aufgabe 5
Extension: Species
* ^context.type = #element
* ^context.expression = "Patient"
* value[x] only CodeableConcept
* value[x] from $SpeciesVS (required)

//Profil zu Aufgabe 2 ff
Profile: MeinPatient
Parent: Patient
Id: MeinPatient
* insert Autoren
//Pflichtfelder und MustSupport-Flags (Aufgabe 2)
* name MS
  * family 1.. MS
  * given 1.. MS
* gender 1.. MS
* birthDate MS
* address 1.. MS
// Einschränkung des Datentyps auf profilierte Adresse
* address only MeineAdresse
* contact.address only MeineAdresse
// Einbinden der Extension aus Aufgabe 5
* extension contains Species named Spezies 1..* MS
//Identifier-Slicing aus Aufgabe 6
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains
    BuergerID 1..1 MS and
    VersichertenID 0..1 MS and
    Reisepassnummer 0..1 MS
* identifier[BuergerID] ^patternIdentifier.system = "http://fhir.ufp/sid/ufp-citizen-id"
  * system 1.. MS
  * value 1.. MS 
* identifier[VersichertenID] ^patternIdentifier.system = "http://fhir.de/sid/gkv/kvid-10"
  * system 1..
  * value 1..
  * value obeys KVID-Test
* identifier[Reisepassnummer] ^patternIdentifier.type.coding.code = #PPN
  * value 1.. MS
  * type 1..


//Instanz zu Aufgabe 2 ff
Instance: MeinBeispielPatient
InstanceOf: MeinPatient
Description: "here's my text"
* name
  * given = "Max"
  * family = "Mustermann"
* birthDate = 2222-12-22
* gender = #male
* address
  * line = "Teststr. 4"
  * postalCode = "12345"
  * city = "Musterhausen"
  * extension[Planet].valueString = "Erde"
  * extension[Quadrant].valueCode = #alpha
* extension[Spezies].valueCodeableConcept.coding[+] = http://fhir.ufp/CodeSystem/species#HS "Human"
* identifier[BuergerID]
  * system = "http://fhir.ufp/sid/ufp-citizen-id"
  * value = "12341kjhkjh12341423"

//Einheitliche Metadaten für alle Artefakte mittels RuleSet
RuleSet: Autoren
* ^publisher = "Gefyra GmbH"
* ^contact.name = "Simone Heckmann"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "sh@gefyra.de"
* ^contact.telecom.use = #work

Invariant: KVID-Test
Description: "Überprüfung der Syntax einer KVID"
Expression: "matches('^[A-Z][0-9]{9}$')"
Severity: #warning



 

