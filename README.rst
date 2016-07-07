

Notes on installation
---------------------
Had an issue running migrate with default on homepage entity.  Had run migrate after installion wagtail and then again after installing puput.  Resolved by deleting tables and running migrate on everything in one go.

Issue with date error: Database returned an invalid value in QuerySet.datetimes(). Are time zone definitions for your database and pytz installed?  Resolved by running:

    mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root -p mysql

    although reported errors:

    (zlf)iMacs-iMac:Development phoebebr$ mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root -p mysql
    Warning: Unable to load '/usr/share/zoneinfo/+VERSION' as time zone. Skipping it.
    Enter password:
    Warning: Unable to load '/usr/share/zoneinfo/Factory' as time zone. Skipping it.
    Warning: Unable to load '/usr/share/zoneinfo/iso3166.tab' as time zone. Skipping it.
    Warning: Unable to load '/usr/share/zoneinfo/zone.tab' as time zone. Skipping it.
    (zlf)iMacs-iMac:Development phoebebr$

Usuall issues installing Pillow on osx - needs version 2.6.1