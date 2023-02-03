# Alarm Clock Project

## Concept
- Create a webpage that displays an alarm clock, in a digital display format

## Minimum Viable Product
- Display a working alarm clock

# Procedure
- Clock displays current time (hour:minute:second:am/pm)
- User can set the alarm time
- Alarm can be snoozed for 5 mins
- Alarm can be turned off

# Objects/Data Structures
1. Clock
    - Displays hour:minute:second:am/pm
    - updates every second to show current time without page refresh

2. Set alarm
    - User selects hour (1-12)
    - User selects minute (1-59)
    - User selects am/pm

3. Control
    - Button to set the alarm
    - Button to snooze alarm
    - Button to stop alarm

# Pseudo Code
//Start Program

    START

        GET current month + day + year
            DISPLAY current month + day + year

        GET current hour + minute + second + am/pm
            DISPLAY current hour + minute + second + am/pm

        INPUT hour that alarm will activate

        INPUT minute that alarm will activate

        INPUT am/pm that alarm will activate

        IF INPUT hour + minute + am/pm
            THEN click set button
        ENDIF

        IF alarm is activated & user wants it to stop
            THEN click stop button
        ENDIF

        IF alarm is activated and user want to snooze
            THEN click snooze button
        ENDIF

    END

//End Program

# Variables

1. **Date**
- dateDisplay
- displayMonth
- displayDay
- displayYear

2. **Clock**
- clockDisplay
- displayHour
- displayMinute
- displaySecond
- ampm
- time
- refreshClock

3. **Set Alarm**
- setHour
- setMinute
- setAmpm

4. **Buttons**
- setAlarm
- stopAlarm
- snoozeAlarm
