-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 10, 2022 at 10:35 AM
-- Server version: 5.7.40-log
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `horizb9k_1stprelaunchDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_details`
--

CREATE TABLE `api_details` (
  `pid` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `property_name` varchar(255) NOT NULL,
  `project_name` varchar(254) DEFAULT NULL,
  `webform_name` varchar(254) NOT NULL,
  `public_id_webform` varchar(254) NOT NULL,
  `Location` varchar(254) DEFAULT NULL,
  `domain` varchar(255) NOT NULL,
  `99acre_pid` varchar(254) DEFAULT NULL,
  `fb_formid` varchar(254) DEFAULT NULL,
  `housing_pid` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `crm`
--

CREATE TABLE `crm` (
  `ID` int(10) NOT NULL,
  `link` varchar(120) DEFAULT NULL,
  `pid` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `AdminRegdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(250) DEFAULT NULL,
  `PropertyName` varchar(500) DEFAULT NULL,
  `Name` varchar(2500) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Mobile` varchar(2500) DEFAULT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `portal_leads`
--

CREATE TABLE `portal_leads` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(250) DEFAULT NULL,
  `PropertyName` varchar(500) DEFAULT NULL,
  `Name` varchar(2500) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Mobile` varchar(2500) DEFAULT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `region_sub`
--

CREATE TABLE `region_sub` (
  `id` bigint(10) NOT NULL,
  `region` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `sub_region` varchar(255) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subregions`
--

CREATE TABLE `subregions` (
  `subregion_id` bigint(20) UNSIGNED NOT NULL,
  `region_id` bigint(20) UNSIGNED NOT NULL,
  `subregion_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `boolean_value` int(10) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbladmin`
--

CREATE TABLE `tbladmin` (
  `ID` int(10) NOT NULL,
  `AdminName` varchar(120) DEFAULT NULL,
  `UserName` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `AdminRegdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Role` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblamenities`
--

CREATE TABLE `tblamenities` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(250) DEFAULT NULL,
  `source` varchar(2500) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `status` int(10) NOT NULL DEFAULT '0',
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbldeveloper`
--

CREATE TABLE `tbldeveloper` (
  `ID` int(10) NOT NULL,
  `Developer` varchar(120) DEFAULT NULL,
  `PostingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblextracode`
--

CREATE TABLE `tblextracode` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `code1` varchar(2500) DEFAULT NULL,
  `code2` varchar(2500) DEFAULT NULL,
  `code3` varchar(2500) NOT NULL DEFAULT '<script>   !function(f,b,e,v,n,t,s)   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?   n.callMethod.apply(n,arguments):n.queue.push(arguments)};   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";   n.queue=[];t=b.createElement(e);t.async=!0;   t.src=v;s=b.getElementsByTagName(e)[0];   s.parentNode.insertBefore(t,s)}(window, document,"script",   "https://connect.facebook.net/en_US/fbevents.js");   fbq("init", "2687918367998614");   fbq("track", "PageView"); </script> <noscript><img height="1" width="1" style="display:none"   src="https://www.facebook.com/tr?id=2687918367998614&ev=PageView&noscript=1"/>   </noscript>',
  `code4` varchar(2500) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Msg` varchar(250) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblfavicon`
--

CREATE TABLE `tblfavicon` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `FeaturedImage` varchar(300) DEFAULT NULL,
  `source` varchar(300) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblfeaturedimages`
--

CREATE TABLE `tblfeaturedimages` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `FeaturedImage` varchar(300) DEFAULT NULL,
  `source` varchar(300) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblfloorplans`
--

CREATE TABLE `tblfloorplans` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `Image` varchar(2000) DEFAULT NULL,
  `source` varchar(2500) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblform`
--

CREATE TABLE `tblform` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(5) DEFAULT NULL,
  `formname` varchar(250) DEFAULT NULL,
  `id1` varchar(100) DEFAULT NULL,
  `id2` varchar(250) NOT NULL,
  `domain` varchar(250) NOT NULL,
  `crmurl` varchar(250) NOT NULL DEFAULT '"https://www.smashsst.com/mcrm/modules/Webforms/capture.php"',
  `status` varchar(20) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Msg` varchar(250) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblgalleryimages`
--

CREATE TABLE `tblgalleryimages` (
  `ID` int(10) NOT NULL,
  `PropertyID` char(20) DEFAULT NULL,
  `FeaturedImage` varchar(200) DEFAULT NULL,
  `source` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblkeywords`
--

CREATE TABLE `tblkeywords` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `metadescription` varchar(2500) DEFAULT NULL,
  `keywords` varchar(2500) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Msg` varchar(250) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbllinks`
--

CREATE TABLE `tbllinks` (
  `ID` int(10) NOT NULL,
  `Description` varchar(225) DEFAULT NULL,
  `Teamleader` varchar(250) DEFAULT NULL,
  `url` varchar(2500) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Msg` varchar(250) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbllogos`
--

CREATE TABLE `tbllogos` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `FeaturedImage` varchar(300) DEFAULT NULL,
  `source` varchar(300) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblnearbylocation`
--

CREATE TABLE `tblnearbylocation` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `l` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblnearbylocationtl`
--

CREATE TABLE `tblnearbylocationtl` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `l` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpricing`
--

CREATE TABLE `tblpricing` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(5) DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `CarpetArea` varchar(120) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpricingtl`
--

CREATE TABLE `tblpricingtl` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(5) DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `CarpetArea` varchar(120) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblproperty`
--

CREATE TABLE `tblproperty` (
  `PropertyID` bigint(10) UNSIGNED NOT NULL,
  `PropertyName` varchar(120) DEFAULT NULL,
  `Theme` int(11) NOT NULL,
  `PostingDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Aboutme` mediumtext,
  `active` tinyint(1) DEFAULT NULL,
  `UpdatedBy` varchar(225) DEFAULT NULL,
  `updationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblproperty`
--

INSERT INTO `tblproperty` (`PropertyID`, `PropertyName`, `Theme`, `PostingDate`, `Aboutme`, `active`, `UpdatedBy`, `updationDate`, `updated_at`, `created_at`) VALUES
(1, 'Safal Sainath Chembur', 0, '2022-12-09 09:56:41', NULL, 1, NULL, '2022-12-09 09:56:41', '2022-12-09 09:56:41', '2022-12-09 09:56:41');

-- --------------------------------------------------------

--
-- Table structure for table `tblpropertydetails`
--

CREATE TABLE `tblpropertydetails` (
  `ID` int(10) NOT NULL,
  `PropertyID` bigint(20) UNSIGNED DEFAULT NULL,
  `PropertyName` mediumtext,
  `ProjectName` varchar(225) DEFAULT NULL,
  `SubProject` varchar(225) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Developer` varchar(50) DEFAULT NULL,
  `Wnumber` varchar(100) NOT NULL DEFAULT '9833717888',
  `Cnumber` varchar(250) DEFAULT NULL,
  `Region` varchar(250) DEFAULT NULL,
  `SubRegion` varchar(250) DEFAULT NULL,
  `ConStatus` varchar(250) DEFAULT NULL,
  `PropertyType` text,
  `t1` varchar(250) DEFAULT NULL,
  `t2` varchar(250) DEFAULT NULL,
  `t3` varchar(250) DEFAULT NULL,
  `t4` varchar(250) DEFAULT NULL,
  `t5` varchar(250) DEFAULT NULL,
  `t6` varchar(250) DEFAULT NULL,
  `te7` varchar(250) DEFAULT NULL,
  `Price` varchar(250) DEFAULT NULL,
  `d1` longtext,
  `d2` longtext,
  `d3` longtext,
  `Colour1` varchar(250) NOT NULL DEFAULT '#0e6b0e	',
  `Colour2` varchar(250) NOT NULL DEFAULT '#2b5329',
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `Msg` varchar(250) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblpropertydetails`
--

INSERT INTO `tblpropertydetails` (`ID`, `PropertyID`, `PropertyName`, `ProjectName`, `SubProject`, `Location`, `Developer`, `Wnumber`, `Cnumber`, `Region`, `SubRegion`, `ConStatus`, `PropertyType`, `t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `te7`, `Price`, `d1`, `d2`, `d3`, `Colour1`, `Colour2`, `ListingDate`, `updatedby`, `updationDate`, `Msg`, `updated_at`, `created_at`) VALUES
(1, 1, 'Safal Sainath Chembur', NULL, NULL, NULL, NULL, '9833717888', NULL, NULL, NULL, '[{\"name\":\"Focused Project\",\"value\":\"FCSPRJ\",\"checked\":true},{\"name\":\"AOP Project\",\"value\":\"AOP\",\"checked\":true},{\"name\":\"Under Construction\",\"value\":\"UCSN\",\"checked\":true}]', 'Residential Aprtments', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '#0e6b0e	', '#2b5329', '2022-12-09 09:56:41', NULL, NULL, NULL, '2022-12-09 09:56:41', '2022-12-09 09:56:41');

-- --------------------------------------------------------

--
-- Table structure for table `tblpropertydetailstl`
--

CREATE TABLE `tblpropertydetailstl` (
  `ID` int(10) NOT NULL,
  `PropertyID` char(20) DEFAULT NULL,
  `PropertyName` mediumtext,
  `ProjectName` varchar(225) DEFAULT NULL,
  `SubProject` varchar(225) NOT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Developer` varchar(50) DEFAULT NULL,
  `Wnumber` varchar(100) NOT NULL DEFAULT '9833717888',
  `Cnumber` varchar(250) DEFAULT NULL,
  `Region` varchar(250) DEFAULT NULL,
  `SubRegion` varchar(250) DEFAULT NULL,
  `ConStatus` varchar(250) DEFAULT NULL,
  `PropertyType` varchar(250) DEFAULT NULL,
  `Price` varchar(250) DEFAULT NULL,
  `AlternateProjectName` varchar(250) DEFAULT NULL,
  `HighResolutionLink` varchar(250) DEFAULT NULL,
  `Competitors` varchar(250) DEFAULT NULL,
  `InventoryCount` varchar(250) DEFAULT NULL,
  `SalesTarget` varchar(250) DEFAULT NULL,
  `AchievedSales` varchar(250) DEFAULT NULL,
  `UnitsTarget` varchar(250) DEFAULT NULL,
  `UnitsSold` varchar(250) DEFAULT NULL,
  `ProjectStartDate` varchar(250) DEFAULT NULL,
  `ProjectEndDate` varchar(250) DEFAULT NULL,
  `ExternalTelecallers` varchar(250) DEFAULT NULL,
  `AdvertisementStatus` varchar(250) DEFAULT NULL,
  `IncentiveLadder` varchar(250) DEFAULT NULL,
  `TownshipProject` varchar(250) DEFAULT NULL,
  `MarketingPlan` varchar(250) DEFAULT NULL,
  `TeamLeaderFocusOn` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `Msg` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpropertydetails_demo`
--

CREATE TABLE `tblpropertydetails_demo` (
  `ID` int(10) NOT NULL,
  `PropertyID` char(20) DEFAULT NULL,
  `PropertyName` mediumtext,
  `Location` varchar(250) DEFAULT NULL,
  `Developer` varchar(50) DEFAULT NULL,
  `Wnumber` varchar(100) NOT NULL DEFAULT '9833717888',
  `Cnumber` varchar(250) DEFAULT NULL,
  `Region` varchar(250) DEFAULT NULL,
  `SubRegion` varchar(250) DEFAULT NULL,
  `ConStatus` varchar(250) DEFAULT NULL,
  `PropertyType` varchar(250) DEFAULT NULL,
  `t1` varchar(250) DEFAULT NULL,
  `t2` varchar(250) DEFAULT NULL,
  `t3` varchar(250) DEFAULT NULL,
  `t4` varchar(250) DEFAULT NULL,
  `t5` varchar(250) DEFAULT NULL,
  `t6` varchar(250) DEFAULT NULL,
  `te7` varchar(250) DEFAULT NULL,
  `Price` varchar(250) DEFAULT NULL,
  `d1` longtext,
  `d2` longtext,
  `d3` longtext,
  `Colour1` varchar(250) NOT NULL DEFAULT '#0e6b0e	',
  `Colour2` varchar(250) NOT NULL DEFAULT '#2b5329',
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `Msg` varchar(250) DEFAULT NULL,
  `Assigned_To` varchar(225) NOT NULL,
  `Remark` varchar(225) NOT NULL,
  `remarkby` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpropertytl`
--

CREATE TABLE `tblpropertytl` (
  `ID` int(10) NOT NULL,
  `PropertyName` varchar(120) DEFAULT NULL,
  `Theme` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `PostingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdationDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `UpdatedBy` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpropertytype`
--

CREATE TABLE `tblpropertytype` (
  `ID` int(10) NOT NULL,
  `PropertType` varchar(120) DEFAULT NULL,
  `EnterDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblremark`
--

CREATE TABLE `tblremark` (
  `ID` int(225) NOT NULL,
  `PropertyID` int(225) NOT NULL,
  `PropertyName` varchar(225) CHARACTER SET latin1 NOT NULL,
  `Remark` varchar(225) CHARACTER SET latin1 NOT NULL,
  `Updatedby` varchar(225) CHARACTER SET latin1 NOT NULL,
  `remarkby` varchar(225) CHARACTER SET latin1 NOT NULL,
  `msgby` varchar(225) CHARACTER SET latin1 NOT NULL,
  `remarkbyre` varchar(225) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblrera`
--

CREATE TABLE `tblrera` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(5) DEFAULT NULL,
  `Rera` varchar(5000) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblreratl`
--

CREATE TABLE `tblreratl` (
  `ID` int(10) NOT NULL,
  `PropertyID` int(5) DEFAULT NULL,
  `Rera` varchar(5000) DEFAULT NULL,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL,
  `EnterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblteamleader`
--

CREATE TABLE `tblteamleader` (
  `ID` int(200) NOT NULL,
  `PropertyID` int(200) NOT NULL,
  `MainProjectName` varchar(200) NOT NULL,
  `ProjectName` varchar(200) NOT NULL,
  `AlternateProjectName` varchar(200) NOT NULL,
  `Location` varchar(200) NOT NULL,
  `Region` varchar(200) NOT NULL,
  `SubRegion` varchar(200) NOT NULL,
  `ProjectStartDate` date NOT NULL,
  `ProjectEndDate` date NOT NULL,
  `RERA` varchar(200) NOT NULL,
  `Brochure` varchar(200) NOT NULL,
  `ImageLink` varchar(200) NOT NULL,
  `Images` varchar(200) NOT NULL,
  `Advertise` varchar(200) NOT NULL,
  `ExtTelecaller` varchar(200) NOT NULL,
  `LaunchType` varchar(200) NOT NULL,
  `CompetitorProjects` varchar(200) NOT NULL,
  `InventoryCnt` varchar(200) NOT NULL,
  `Activity` varchar(200) NOT NULL,
  `IsLadder` varchar(200) NOT NULL,
  `LadderTarget` varchar(200) NOT NULL,
  `MarketingPlanDev` varchar(200) NOT NULL,
  `IsTownship` varchar(200) NOT NULL,
  `TargetTL` varchar(200) NOT NULL,
  `UpdatedBy` varchar(200) NOT NULL,
  `Date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbltelecallers`
--

CREATE TABLE `tbltelecallers` (
  `ID` int(10) NOT NULL,
  `TelecallerName` varchar(120) DEFAULT NULL,
  `UserName` varchar(120) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `Regdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Role` varchar(225) NOT NULL,
  `Region` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblurl`
--

CREATE TABLE `tblurl` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `URL` varchar(2500) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblyoutubeurl`
--

CREATE TABLE `tblyoutubeurl` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `youtubeURL` varchar(600) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedby` varchar(250) DEFAULT NULL,
  `updationDate` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_confirmation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `Name`, `email`, `password`, `password_confirmation`, `mobile_no`, `role`, `active`, `updated_at`, `created_at`) VALUES
(5, 'Rajendra2', 'test1@gmail.com', '$2y$10$N/pgxbGHyOpu/yCMbNIJb.Vlg8qzbwhNPlRerC4H3PctrkXRi08A.', 'pass14221', '9874566321', 'TL', 1, '2022-03-24 07:17:14', '2022-02-25 09:27:40'),
(13, 'Chandrakant', 'kalesneha12345@gmail.com', '$2y$10$N/pgxbGHyOpu/yCMbNIJb.Vlg8qzbwhNPlRerC4H3PctrkXRi08A.', 'pass14221', '9874566321', 'TL', 1, '2022-03-26 01:50:08', '2022-02-25 09:27:40'),
(14, 'Testm-22', 'test22@gmail.com', '$2y$10$m0Ngse6YvXMd2bTlJaAz8uxarpXJjLEeOvPavxEfM5gEU2CPWyID6', 'pass', '0', '', 1, '2022-02-25 09:27:40', '2022-02-25 09:27:40'),
(15, 'Testm-22', 'test223@gmail.com', '$2y$10$AId5WVntG1VnlCObA7zrgOd9Jbk.7J5A1n3WPwjB2YAl7MUGcqklq', 'pass', '0', '', 1, '2022-02-25 09:27:40', '2022-02-25 09:27:40'),
(17, 'M', 'sagarchandanshive90@gmail.com', '$2y$10$gdUG0iKK9/pgCGwJTr07iuX5fjPx2bGnAp.SLvVzFRD5Yj.mp6eOi', 'sagar', '0', '', 1, '2022-02-25 09:27:40', '2022-02-25 09:27:40'),
(19, 'Test', 'test2@gmail.com', '$2y$10$xNITmtk2Rg28ksUFKtprWer9uC.S.8JbEDOXjwqfLqULHamBv8sQG', 'as', '9987110737', 'IT', 1, '2022-02-25 04:28:48', '2022-02-25 04:28:48'),
(20, 'Sneha', 'snehakale@gmail.com', '$2y$10$v/X2i5huMJilVNv1y322heKDWWuCaKe5eFYlLHvrcAEco8Dw8JAoK', 'pass14221', '9999999999', 'IT', 0, '2022-02-25 04:35:38', '2022-02-25 04:35:38'),
(22, 'demo', 'demo@gmail.com', '$2y$10$S4ZUZfDxc0b60rdQZWEfBOo9VMBHqcwxg1gxPvMiW7x0obWtwsszS', 'demo', '5896589656', 'demo132', 1, '2022-03-03 02:22:59', '2022-02-26 05:24:38'),
(24, 'kajal', 'kajal987@gmail.com', '$2y$10$kUW0BUQWWj0b5GDq2Xy/7OT6njVPIeUK7MV39zMQWUfGquz.LEruK', '1234', '9874566321', 'Team Leader', 1, '2022-03-26 06:10:56', '2022-03-26 00:24:35'),
(25, 'Snehaa', 'adityatech@gmail.com', '$2y$10$kO6TdwaUENE93xROzfMDP.eB4RpP6mvr3KLlroP4xBA02OdeqQlDy', '123456', '123456789', 'abcd', 0, '2022-11-17 06:57:34', '2022-03-26 00:25:11'),
(26, 'Developer', 'developer@gmail.com', '$2y$10$vGS2sYAF2ovA.jev99iwReWWAoATXoPNQFJeDJ2gdCd.r4ibGc3Ly', '123456', '9874563000', 'IT', 1, '2022-03-31 01:32:14', '2022-03-31 01:32:14'),
(27, 'Developer test', 'developertest@gmail.com', '$2y$10$wpRasPd3I1TRh9FrI5coBuOpNrthjpdIF/UGcwj8/pV24OccK9ffu', '123456', '9874563000', 'TL', 1, '2022-03-31 01:33:09', '2022-03-31 01:33:09'),
(28, 'bhushan', 'snehal@gmail.com', '$2y$10$O85YnC7ei.mLSyYWSR5EG.vEJ8WNBNvL.kPx44f1hOATce9GbNdUy', '123456', '9874563214', 'IT', 1, '2022-09-22 15:21:17', '2022-09-22 15:21:17'),
(29, 'Snehal Shivkar', 'snehal.baikar@gmail.com', '$2y$10$isI0YSMDnZGn5iV.Eh1oCuWqHY6ZSHvwPDtns.5/cojX65d9IJgqy', '123456', '9856742585', 'IT', 1, '2022-09-28 14:35:51', '2022-09-28 14:35:51'),
(30, 'aditya', 'aditya@gmail.com', '$2y$10$gG7sEXARGBhgyhjeAVDjOuOYzai1jlwMRp3DevABprFY8ZBkPwKtq', '123456', '9769956696', 'IT', 0, '2022-11-21 11:13:55', '2022-10-28 00:25:58'),
(31, 'aaaabbbb', 'cccc@gmail.com', '123456', '123456', '987456632', 'Team Leader', 1, '2022-11-19 11:21:53', '2022-11-18 04:44:29'),
(33, 'sumedh', 'sumedh5@gmail.com', '$2y$10$qtoKfZ.JrQk/zgvskeWJ6e2eOPJYVy/X14hbGJrqc8KuT0mTuW5hi', '123456', '9769956693', 'IT', 1, '2022-11-19 11:43:31', '2022-11-18 05:37:46'),
(34, 'chaha', 'chaha@gmail.com', '$2y$10$K3DbOYsXOzozSySX8Nra..2Da/h5cyYgvx82yPWu35TVReh7zaDnW', '123456', '9769956696', 'IT', 1, '2022-11-21 11:43:12', '2022-11-21 11:43:12'),
(35, 'chahas', 'chahas@gmail.com', '$2y$10$1CoCgpBgvIrBDHAd361SF.tFwRDpFy29AgRL7yBpseIM/O1azwuJ2', '123456', '9769956694', 'IT', NULL, '2022-11-21 11:58:07', '2022-11-21 11:58:07'),
(36, 'abcpqr', 'abcpqr@gmail.com', '$2y$10$chxDzXrU0y6mXg1HA3NkAu6WtQo/Hp5H8rrW/JAEbEECFEtKAVfi2', '123456', '9769956697', 'IT', NULL, '2022-11-21 12:26:24', '2022-11-21 12:26:24'),
(37, 'ssss', 'ssss@gmail.com', '$2y$10$zG3u8MlOnjIIHxTV6Le19ObvHoPfzkt0iw/JEaWYEjNEYRNIf2w3m', '123456', '9769956693', 'IT', NULL, '2022-11-21 12:28:46', '2022-11-21 12:28:46'),
(38, 'eeeee', 'eeee@gmail.com', '123456', '123456', '9769956699', 'Team Leader', 1, '2022-11-21 12:36:52', '2022-11-21 12:36:52'),
(39, 'wwww', 'wwww@gmail.com', '$2y$10$NNEtn1WlporPgXDrcaubtuzyAAOuspKzbcYXW2SnwF7OO8FjDMwz.', '123456', '9769956693', 'IT', NULL, '2022-11-21 12:45:45', '2022-11-21 12:45:45'),
(40, 'hfprr', 'kfp@gmail.com', '$2y$10$V.k3OP7igYiTndRpjFHMXeUdd9gK8QUTVRU9rKGEWGuYDYlk1c0e6', '123456', '9769956691', 'IT', NULL, '2022-11-21 12:48:09', '2022-11-21 12:48:09'),
(41, 'dddd', 'dddd@gmail.com', '$2y$10$wDXwOjH9LSnKVdVIv4QqruOyH4Gdt7BOiLgzJUcxcti7x.7zV4a0i', '123456', '9769956690', 'Team Leader', 1, '2022-11-21 12:49:37', '2022-11-21 12:49:37'),
(42, 'patade sumedh', 'patade@gmail.com', '$2y$10$ewkOdvM5TSOoSudeI3hHc.9TEWmtgAQVSYQhVIzR5p7Tctfy0Ls1y', '123456', '9769956692', 'Team Leader', 0, '2022-11-21 12:54:48', '2022-11-21 12:54:48');

-- --------------------------------------------------------

--
-- Table structure for table `userslog`
--

CREATE TABLE `userslog` (
  `ID` int(10) NOT NULL,
  `PropertyID` varchar(20) DEFAULT NULL,
  `PropertyName` varchar(250) DEFAULT NULL,
  `Msg` varchar(2500) DEFAULT NULL,
  `Attribute` varchar(250) DEFAULT NULL,
  `ListingDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updationDate` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userslog`
--

INSERT INTO `userslog` (`ID`, `PropertyID`, `PropertyName`, `Msg`, `Attribute`, `ListingDate`, `updationDate`, `created_at`, `updated_at`) VALUES
(1, '1', 'Safal Sainath Chembur', 'undefined Favicon has been added to Safal Sainath Chembur by undefined', 'Favicon', NULL, NULL, '2022-12-10 04:49:03', '2022-12-10 04:49:03'),
(2, '1', 'Safal Sainath Chembur', 'undefined Favicon has been added to Safal Sainath Chembur by undefined', 'Favicon', NULL, NULL, '2022-12-10 04:50:02', '2022-12-10 04:50:02');

-- --------------------------------------------------------

--
-- Table structure for table `vendorleads`
--

CREATE TABLE `vendorleads` (
  `ID` int(10) NOT NULL,
  `ClientName` varchar(2500) DEFAULT NULL,
  `Mobile` varchar(2500) DEFAULT NULL,
  `TeleCaller` varchar(250) DEFAULT NULL,
  `Feedback` varchar(250) DEFAULT NULL,
  `Project` varchar(250) DEFAULT NULL,
  `Region` varchar(250) DEFAULT NULL,
  `Subregion` varchar(250) DEFAULT NULL,
  `Flattype` varchar(250) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Budget` varchar(250) DEFAULT NULL,
  `Possession` varchar(250) DEFAULT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_details`
--
ALTER TABLE `api_details`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `crm`
--
ALTER TABLE `crm`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `portal_leads`
--
ALTER TABLE `portal_leads`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `region_sub`
--
ALTER TABLE `region_sub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbladmin`
--
ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblamenities`
--
ALTER TABLE `tblamenities`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbldeveloper`
--
ALTER TABLE `tbldeveloper`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblextracode`
--
ALTER TABLE `tblextracode`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblfavicon`
--
ALTER TABLE `tblfavicon`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblfeaturedimages`
--
ALTER TABLE `tblfeaturedimages`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblfloorplans`
--
ALTER TABLE `tblfloorplans`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblform`
--
ALTER TABLE `tblform`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblgalleryimages`
--
ALTER TABLE `tblgalleryimages`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblkeywords`
--
ALTER TABLE `tblkeywords`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbllinks`
--
ALTER TABLE `tbllinks`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbllogos`
--
ALTER TABLE `tbllogos`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblnearbylocation`
--
ALTER TABLE `tblnearbylocation`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblnearbylocationtl`
--
ALTER TABLE `tblnearbylocationtl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpricing`
--
ALTER TABLE `tblpricing`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpricingtl`
--
ALTER TABLE `tblpricingtl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblproperty`
--
ALTER TABLE `tblproperty`
  ADD PRIMARY KEY (`PropertyID`);

--
-- Indexes for table `tblpropertydetails`
--
ALTER TABLE `tblpropertydetails`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_PropertyID` (`PropertyID`);

--
-- Indexes for table `tblpropertydetailstl`
--
ALTER TABLE `tblpropertydetailstl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpropertydetails_demo`
--
ALTER TABLE `tblpropertydetails_demo`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpropertytl`
--
ALTER TABLE `tblpropertytl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpropertytype`
--
ALTER TABLE `tblpropertytype`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblremark`
--
ALTER TABLE `tblremark`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblrera`
--
ALTER TABLE `tblrera`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblreratl`
--
ALTER TABLE `tblreratl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblteamleader`
--
ALTER TABLE `tblteamleader`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbltelecallers`
--
ALTER TABLE `tbltelecallers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblurl`
--
ALTER TABLE `tblurl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblyoutubeurl`
--
ALTER TABLE `tblyoutubeurl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `userslog`
--
ALTER TABLE `userslog`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `vendorleads`
--
ALTER TABLE `vendorleads`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_details`
--
ALTER TABLE `api_details`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crm`
--
ALTER TABLE `crm`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portal_leads`
--
ALTER TABLE `portal_leads`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `region_sub`
--
ALTER TABLE `region_sub`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbladmin`
--
ALTER TABLE `tbladmin`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblamenities`
--
ALTER TABLE `tblamenities`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbldeveloper`
--
ALTER TABLE `tbldeveloper`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblextracode`
--
ALTER TABLE `tblextracode`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblfavicon`
--
ALTER TABLE `tblfavicon`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblfeaturedimages`
--
ALTER TABLE `tblfeaturedimages`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblfloorplans`
--
ALTER TABLE `tblfloorplans`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblform`
--
ALTER TABLE `tblform`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblgalleryimages`
--
ALTER TABLE `tblgalleryimages`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblkeywords`
--
ALTER TABLE `tblkeywords`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbllinks`
--
ALTER TABLE `tbllinks`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbllogos`
--
ALTER TABLE `tbllogos`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblnearbylocation`
--
ALTER TABLE `tblnearbylocation`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblnearbylocationtl`
--
ALTER TABLE `tblnearbylocationtl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpricing`
--
ALTER TABLE `tblpricing`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpricingtl`
--
ALTER TABLE `tblpricingtl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblproperty`
--
ALTER TABLE `tblproperty`
  MODIFY `PropertyID` bigint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblpropertydetails`
--
ALTER TABLE `tblpropertydetails`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblpropertydetailstl`
--
ALTER TABLE `tblpropertydetailstl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpropertydetails_demo`
--
ALTER TABLE `tblpropertydetails_demo`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpropertytl`
--
ALTER TABLE `tblpropertytl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpropertytype`
--
ALTER TABLE `tblpropertytype`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblremark`
--
ALTER TABLE `tblremark`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblrera`
--
ALTER TABLE `tblrera`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblreratl`
--
ALTER TABLE `tblreratl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblteamleader`
--
ALTER TABLE `tblteamleader`
  MODIFY `ID` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbltelecallers`
--
ALTER TABLE `tbltelecallers`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblurl`
--
ALTER TABLE `tblurl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblyoutubeurl`
--
ALTER TABLE `tblyoutubeurl`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userslog`
--
ALTER TABLE `userslog`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vendorleads`
--
ALTER TABLE `vendorleads`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblpropertydetails`
--
ALTER TABLE `tblpropertydetails`
  ADD CONSTRAINT `fk_PropertyID` FOREIGN KEY (`PropertyID`) REFERENCES `tblproperty` (`PropertyID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
