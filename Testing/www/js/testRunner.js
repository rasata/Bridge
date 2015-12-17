﻿/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.RunTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            QUnit.module("Inheritance, abstract, virtual and overloading");
            QUnit.test("Overloading static methods", Bridge.get(ClientTestLibrary.TestOverloadStaticMethods).testStatic);
            QUnit.test("Overloading instance methods", Bridge.get(ClientTestLibrary.TestOverloadInstanceMethods).testInstance);
            QUnit.test("Inheritance A instance", Bridge.get(ClientTestLibrary.TestInheritance).testA);
            QUnit.test("Inheritance B instance", Bridge.get(ClientTestLibrary.TestInheritance).testB);
            QUnit.test("Inheritance B instance as A type", Bridge.get(ClientTestLibrary.TestInheritance).testAB);
            QUnit.test("Abstract B instance", Bridge.get(ClientTestLibrary.TestAbstractClass).testB);
            QUnit.test("Abstract C instance", Bridge.get(ClientTestLibrary.TestAbstractClass).testC);
            QUnit.test("Abstract BC instance as A type", Bridge.get(ClientTestLibrary.TestAbstractClass).testBC);
            QUnit.test("Virtual methods", Bridge.get(ClientTestLibrary.TestVirtualMethods).testB);

            QUnit.module("Reference types");
            QUnit.test("Instance constructors and methods", Bridge.get(ClientTestLibrary.TestReferenceTypes).testInstanceConstructorsAndMethods);
            QUnit.test("Static constructors and methods", Bridge.get(ClientTestLibrary.TestReferenceTypes).testStaticConstructorsAndMethods);
            QUnit.test("Method parameters", Bridge.get(ClientTestLibrary.TestReferenceTypes).testMethodParameters);

            QUnit.module("Value types");
            QUnit.test("Instance constructors and methods", Bridge.get(ClientTestLibrary.TestValueTypes).testInstanceConstructorsAndMethods);
            QUnit.test("Static constructors and methods", Bridge.get(ClientTestLibrary.TestValueTypes).testStaticConstructorsAndMethods);

            QUnit.module("Interfaces");
            QUnit.test("Interface method and property", Bridge.get(ClientTestLibrary.TestInterfaces).testInterfaceMethodAndProperty);
            QUnit.test("Explicit interface", Bridge.get(ClientTestLibrary.TestInterfaces).testExplicitInterfaceMethodAndProperty);
            QUnit.test("Simple two interfaces", Bridge.get(ClientTestLibrary.TestInterfaces).testTwoInterfaces);

            QUnit.module("Method parameters");
            QUnit.test("Default and params", Bridge.get(ClientTestLibrary.TestMethodParametersClass).test);

            QUnit.module("String");
            QUnit.test("Common", Bridge.get(ClientTestLibrary.TestStringFunctions).strings);
            QUnit.test("String Enumerable", Bridge.get(ClientTestLibrary.TestStringFunctions).enumerable);
            QUnit.test("String #393", Bridge.get(ClientTestLibrary.TestStringFunctions).issueBridge393);
            QUnit.test("StringBuilder", Bridge.get(ClientTestLibrary.TestStringBuilderFunctions).stringBuilders);

            QUnit.module("Enum");
            QUnit.test("Parse", Bridge.get(ClientTestLibrary.TestEnum).testParse);
            QUnit.test("ParseIgnoreCase", Bridge.get(ClientTestLibrary.TestEnum).testParseIgnoreCase);
            QUnit.test("ToString", Bridge.get(ClientTestLibrary.TestEnum).testToString);
            QUnit.test("GetValues", Bridge.get(ClientTestLibrary.TestEnum).testGetValues);
            QUnit.test("CompareTo", Bridge.get(ClientTestLibrary.TestEnum).testCompareTo);
            QUnit.test("Format", Bridge.get(ClientTestLibrary.TestEnum).testFormat);
            QUnit.test("GetName", Bridge.get(ClientTestLibrary.TestEnum).testGetName);
            QUnit.test("GetNames", Bridge.get(ClientTestLibrary.TestEnum).testGetNames);
            QUnit.test("HasFlag", Bridge.get(ClientTestLibrary.TestEnum).testHasFlag);
            QUnit.test("IsDefined", Bridge.get(ClientTestLibrary.TestEnum).testIsDefined);
            QUnit.test("TryParse", Bridge.get(ClientTestLibrary.TestEnum).testTryParse);

            QUnit.module("Date and time");
            QUnit.test("Common", Bridge.get(ClientTestLibrary.TestDateFunctions).dateTimes);
            QUnit.test("#329", Bridge.get(ClientTestLibrary.TestDateFunctions).bridge329);
            QUnit.test("#349", Bridge.get(ClientTestLibrary.TestDateFunctions).bridge349);

            QUnit.module("Try/Catch");
            QUnit.test("Try/Catch simpe", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).simpleTryCatch);
            QUnit.test("Try/Catch caught exceptions", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).caughtExceptions);
            QUnit.test("Try/Catch thrown exceptions", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).thrownExceptions);
            QUnit.test("#320", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).bridge320);
            QUnit.test("#343", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).bridge343);
            QUnit.test("Try/Catch/Finally simple", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).simpleTryCatchFinally);
            QUnit.test("Try/Catch/Finally caught exceptions", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).caughtExceptions);
            QUnit.test("Try/Catch/Finally thrown exceptions", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).thrownExceptions);

            QUnit.module("System");
            QUnit.test("Version TestConstructors", Bridge.get(ClientTestLibrary.TestVersion).testConstructors);
            QUnit.test("Version Equals and GetHashCode", Bridge.get(ClientTestLibrary.TestVersion).testEqualsGetHashCode);
            QUnit.test("Version ToString", Bridge.get(ClientTestLibrary.TestVersion).testToString);
            QUnit.test("Version Parse", Bridge.get(ClientTestLibrary.TestVersion).testParse);
            QUnit.test("Version Operators", Bridge.get(ClientTestLibrary.TestVersion).testOperators);
            QUnit.test("Version #499", Bridge.get(ClientTestLibrary.TestVersion).testIssue499);

            QUnit.module("Issues");
            QUnit.test("#169", Bridge.get(ClientTestLibrary.TestBridgeIssues).n169);
            QUnit.test("#240", Bridge.get(ClientTestLibrary.TestBridgeIssues).n240);
            QUnit.test("#264", Bridge.get(ClientTestLibrary.TestBridgeIssues).n264);
            QUnit.test("#266", Bridge.get(ClientTestLibrary.TestBridgeIssues).n266);
            QUnit.test("#272", Bridge.get(ClientTestLibrary.TestBridgeIssues).n272);
            QUnit.test("#273", Bridge.get(ClientTestLibrary.TestBridgeIssues).n273);
            QUnit.test("#277", Bridge.get(ClientTestLibrary.TestBridgeIssues).n277);
            QUnit.test("#294", Bridge.get(ClientTestLibrary.TestBridgeIssues).n294);
            QUnit.test("#304", Bridge.get(ClientTestLibrary.TestBridgeIssues).n304);
            QUnit.test("#305", Bridge.get(ClientTestLibrary.TestBridgeIssues).n305);
            QUnit.test("#306", Bridge.get(ClientTestLibrary.TestBridgeIssues).n306);
            QUnit.test("#335", Bridge.get(ClientTestLibrary.TestBridgeIssues).n335);
            QUnit.test("#336", Bridge.get(ClientTestLibrary.TestBridgeIssues).n336);
            QUnit.test("#337", Bridge.get(ClientTestLibrary.TestBridgeIssues).n337);
            QUnit.test("#338", Bridge.get(ClientTestLibrary.TestBridgeIssues).n338);
            QUnit.test("#339", Bridge.get(ClientTestLibrary.TestBridgeIssues).n339);
            QUnit.test("#340", Bridge.get(ClientTestLibrary.TestBridgeIssues).n340);
            QUnit.test("#341", Bridge.get(ClientTestLibrary.TestBridgeIssues).n341);
            QUnit.test("#342", Bridge.get(ClientTestLibrary.TestBridgeIssues).n342);
            QUnit.test("#377", Bridge.get(ClientTestLibrary.TestBridgeIssues).n377);
            QUnit.test("#381", Bridge.get(ClientTestLibrary.Bridge381).testUseCase);
            QUnit.test("#383", Bridge.get(ClientTestLibrary.TestBridgeIssues).n383);
            QUnit.test("#395", Bridge.get(ClientTestLibrary.TestBridgeIssues).n395);
            QUnit.test("#406", Bridge.get(ClientTestLibrary.TestBridgeIssues).n406);
            QUnit.test("#407", Bridge.get(ClientTestLibrary.TestBridgeIssues).n407);
            QUnit.test("#409", Bridge.get(ClientTestLibrary.TestBridgeIssues).n409);
            QUnit.test("#410", Bridge.get(ClientTestLibrary.TestBridgeIssues).n410);
            QUnit.test("#418", Bridge.get(ClientTestLibrary.TestBridgeIssues).n418);
            QUnit.test("#422", Bridge.get(ClientTestLibrary.TestBridgeIssues).n422);
            QUnit.test("#428", Bridge.get(ClientTestLibrary.TestBridgeIssues).n428);
            QUnit.test("#435", Bridge.get(ClientTestLibrary.TestBridgeIssues).n435);
            QUnit.test("#436", Bridge.get(ClientTestLibrary.TestBridgeIssues).n436);
            QUnit.test("#438", Bridge.get(ClientTestLibrary.TestBridgeIssues).n438);
            QUnit.test("#439", Bridge.get(ClientTestLibrary.TestBridgeIssues).n439);
            QUnit.test("#442", Bridge.get(ClientTestLibrary.TestBridgeIssues).n442);
            QUnit.test("#460", Bridge.get(ClientTestLibrary.TestBridgeIssues).n460);
            QUnit.test("#467", Bridge.get(ClientTestLibrary.TestBridgeIssues).n467);
            QUnit.test("#469", Bridge.get(ClientTestLibrary.TestBridgeIssues).n469);
            QUnit.test("#470", Bridge.get(ClientTestLibrary.TestBridgeIssues).n470);
            QUnit.test("#472", Bridge.get(ClientTestLibrary.Bridge472).test);
            QUnit.test("#479", Bridge.get(ClientTestLibrary.Bridge479).testUseCase);
            QUnit.test("#485", Bridge.get(ClientTestLibrary.Bridge485).testUseCase);
            QUnit.test("#495", Bridge.get(ClientTestLibrary.Bridge495).testUseCase);
            QUnit.test("#501", Bridge.get(ClientTestLibrary.Bridge501).testUseCase);
            QUnit.test("#502", Bridge.get(ClientTestLibrary.Bridge502).testUseCase);
            QUnit.test("#503", Bridge.get(ClientTestLibrary.Bridge503).testUseCase);
            QUnit.test("#508", Bridge.get(ClientTestLibrary.Bridge508).testUseCase);
            QUnit.test("#514", Bridge.get(ClientTestLibrary.Bridge514).testUseCase);
            QUnit.test("#514", Bridge.get(ClientTestLibrary.Bridge514).testRelated);
            QUnit.test("#520", Bridge.get(ClientTestLibrary.Bridge520).testUseCase);
            QUnit.test("#522", Bridge.get(ClientTestLibrary.Bridge522).testUseCase1);
            QUnit.test("#522", Bridge.get(ClientTestLibrary.Bridge522).testUseCase2);
            QUnit.test("#532", Bridge.get(ClientTestLibrary.Bridge532).testUseCase);
            QUnit.test("#537", Bridge.get(ClientTestLibrary.Bridge537).testUseCase);
            QUnit.test("#538", Bridge.get(ClientTestLibrary.Bridge538).testUseCase);
            QUnit.test("#544", Bridge.get(ClientTestLibrary.Bridge544).testUseCase);
            QUnit.test("#544", Bridge.get(ClientTestLibrary.Bridge544).testRelated);
            QUnit.test("#546", Bridge.get(ClientTestLibrary.Bridge546).testUseCase);
            QUnit.test("#546", Bridge.get(ClientTestLibrary.Bridge546).testRelated);
            QUnit.test("#548", Bridge.get(ClientTestLibrary.Bridge548).testUseCase);
            QUnit.test("#549", Bridge.get(ClientTestLibrary.Bridge549).testUseCase);
            QUnit.test("#550", Bridge.get(ClientTestLibrary.Bridge550).testUseCase);
            QUnit.test("#554", Bridge.get(ClientTestLibrary.Bridge554).testUseCase);
            QUnit.test("#555", Bridge.get(ClientTestLibrary.Bridge555).testUseCase);
            QUnit.test("#558", Bridge.get(ClientTestLibrary.Bridge558).testUseCase);
            QUnit.test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase1);
            QUnit.test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase2);
            QUnit.test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase3);
            QUnit.test("#563", Bridge.get(ClientTestLibrary.Bridge563).tesForeach);
            QUnit.test("#563", Bridge.get(ClientTestLibrary.Bridge563).tesFor);
            QUnit.test("#565", Bridge.get(ClientTestLibrary.Bridge565).testUseCase);
            QUnit.test("#566", Bridge.get(ClientTestLibrary.Bridge566).testUseCase);
            QUnit.test("#572", Bridge.get(ClientTestLibrary.Bridge572).testUseCase);
            QUnit.test("#577", Bridge.get(ClientTestLibrary.Bridge577).testUseCase);
            QUnit.test("#578", Bridge.get(ClientTestLibrary.Bridge578).testUseCase);
            QUnit.test("#580", Bridge.get(ClientTestLibrary.Bridge580).testUseCase);
            QUnit.test("#582", Bridge.get(ClientTestLibrary.Bridge582).testAddTicks);
            QUnit.test("#582", Bridge.get(ClientTestLibrary.Bridge582).testAddTimeSpan);
            QUnit.test("#582", Bridge.get(ClientTestLibrary.Bridge582).testSubtractTimeSpan);
            QUnit.test("#582", Bridge.get(ClientTestLibrary.Bridge582).testTimeOfDay);
            QUnit.test("#582", Bridge.get(ClientTestLibrary.Bridge582).testTicks);
            QUnit.test("#583", Bridge.get(ClientTestLibrary.Bridge583).testUseCase);
            QUnit.test("#586", Bridge.get(ClientTestLibrary.Bridge586).testUseCase);
            QUnit.test("#588", Bridge.get(ClientTestLibrary.Bridge588).testUseCase);
            QUnit.test("#588", Bridge.get(ClientTestLibrary.Bridge588C).testUseCase);
            QUnit.test("#592", Bridge.get(ClientTestLibrary.Bridge592).testUseCase);
            QUnit.test("#595", Bridge.get(ClientTestLibrary.Bridge595).testUseCase);
            QUnit.test("#597", Bridge.get(ClientTestLibrary.Bridge597).testUseCase);
            QUnit.test("#603", Bridge.get(ClientTestLibrary.Bridge603).testUseCase);
            QUnit.test("#603", Bridge.get(ClientTestLibrary.Bridge603).testRelated);
            QUnit.test("#606", Bridge.get(ClientTestLibrary.Bridge606).testUseCase);
            QUnit.test("#607", Bridge.get(ClientTestLibrary.Bridge607).testUseCase);
            QUnit.test("#608", Bridge.get(ClientTestLibrary.Bridge608).testUseCase);
            QUnit.test("#615", Bridge.get(ClientTestLibrary.Bridge615).testUseCase);
            QUnit.test("#623", Bridge.get(ClientTestLibrary.Bridge623).testUseCase);
            QUnit.test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCase1);
            QUnit.test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCase2);
            QUnit.test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCaseFor658);
            QUnit.test("#635", Bridge.get(ClientTestLibrary.Bridge635).testUseCase);
            QUnit.test("#647", Bridge.get(ClientTestLibrary.Bridge647).testUseCase);
            QUnit.test("#648", Bridge.get(ClientTestLibrary.Bridge648).testUseCase);
            QUnit.test("#652", Bridge.get(ClientTestLibrary.Bridge652).testUseCase);
            QUnit.test("#655", Bridge.get(ClientTestLibrary.Bridge655).testUseCase);
            QUnit.test("#660", Bridge.get(ClientTestLibrary.Bridge660).testUseCase);
            QUnit.test("#661", Bridge.get(ClientTestLibrary.Bridge661).testUseCase);
            QUnit.test("#664", Bridge.get(ClientTestLibrary.Bridge664).testUseCase);
            QUnit.test("#666", Bridge.get(ClientTestLibrary.Bridge666).testUseCase);
            QUnit.test("#671", Bridge.get(ClientTestLibrary.Bridge671).testUseCase);
            QUnit.test("#674", Bridge.get(ClientTestLibrary.Bridge674).testUseCase);
            QUnit.test("#675", Bridge.get(ClientTestLibrary.Bridge675).testUseCase);
            QUnit.test("#689", Bridge.get(ClientTestLibrary.Bridge689).testUseCase);
            QUnit.test("#690", Bridge.get(ClientTestLibrary.Bridge690).testUseCaseForInstance);
            QUnit.test("#690", Bridge.get(ClientTestLibrary.Bridge690).testUseCaseForStatic);
            QUnit.test("#691", Bridge.get(ClientTestLibrary.Bridge691).testUseCase);
            QUnit.test("#693", Bridge.get(ClientTestLibrary.Bridge693).testUseCase);
            QUnit.test("#708", Bridge.get(ClientTestLibrary.Bridge708).testUseCase);
            QUnit.test("#722", Bridge.get(ClientTestLibrary.Bridge722).testUseCase);
            QUnit.test("#726", Bridge.get(ClientTestLibrary.Bridge726).testUseCase);

            QUnit.module("LINQ");
            QUnit.test("Aggregate operators", Bridge.get(ClientTestLibrary.Linq.TestLinqAggregateOperators).test);
            QUnit.test("Aggregate operators", Bridge.get(ClientTestLibrary.Linq.TestLinqAggregateOperators).bridge315);
            QUnit.test("Conversion operators", Bridge.get(ClientTestLibrary.Linq.TestLinqConversionOperators).test);
            QUnit.test("Element operators", Bridge.get(ClientTestLibrary.Linq.TestLinqElementOperators).test);
            QUnit.test("Generation operators", Bridge.get(ClientTestLibrary.Linq.TestLinqGenerationOperators).test);
            QUnit.test("Join operators", Bridge.get(ClientTestLibrary.Linq.TestLinqJoinOperators).test);
            QUnit.test("Grouping operators", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).test);
            QUnit.test("Complex grouping operators.", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).testComplexGrouping);
            QUnit.test("Anagram grouping operators.", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).testAnagrams);
            QUnit.test("Miscellaneous operators", Bridge.get(ClientTestLibrary.Linq.TestLinqMiscellaneousOperators).test);
            QUnit.test("Ordering operators", Bridge.get(ClientTestLibrary.Linq.TestLinqOrderingOperators).test);
            QUnit.test("Partitioning operators", Bridge.get(ClientTestLibrary.Linq.TestLinqPartitioningOperators).test);
            QUnit.test("Projection operators", Bridge.get(ClientTestLibrary.Linq.TestLinqProjectionOperators).test);
            QUnit.test("Quantifiers", Bridge.get(ClientTestLibrary.Linq.TestLinqQuantifiers).test);
            QUnit.test("Query execution", Bridge.get(ClientTestLibrary.Linq.TestLinqQueryExecution).test);
            QUnit.test("Restriction operators", Bridge.get(ClientTestLibrary.Linq.TestLinqRestrictionOperators).test);
            QUnit.test("Set operators", Bridge.get(ClientTestLibrary.Linq.TestLinqSetOperators).test);
        }
    }
});

Bridge.init();