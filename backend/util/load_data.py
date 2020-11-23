from model.question_model import Question
from random import randint
questions = [
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The Harvard architecture for micro-controllers added which additional bus?",
        "correct_answer": "Instruction",
        "incorrect_answers": [
            "Address",
            "Data",
            "Control"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        "correct_answer": "Apple",
        "incorrect_answers": [
            "Microsoft",
            "Atari",
            "Commodore"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In any programming language, what is the most common way to iterate through an array?",
        "correct_answer": "'For' loops",
        "incorrect_answers": [
            "'If' Statements",
            "'Do-while' loops",
            "'While' loops"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
        "correct_answer": "1000",
        "incorrect_answers": [
            "512",
            "1024",
            "500"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What was the name of the security vulnerability found in Bash in 2014?",
        "correct_answer": "Shellshock",
        "incorrect_answers": [
            "Heartbleed",
            "Bashbug",
            "Stagefright"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When Gmail first launched, how much storage did it provide for your email?",
        "correct_answer": "1GB",
        "incorrect_answers": [
            "512MB",
            "5GB",
            "Unlimited"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Whistler was the codename of this Microsoft Operating System.",
        "correct_answer": "Windows XP",
        "incorrect_answers": [
            "Windows 2000",
            "Windows 7",
            "Windows 95"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
        "correct_answer": "Year",
        "incorrect_answers": [
            "Four Years",
            "Two Years",
            "Eight Years"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What does GHz stand for?",
        "correct_answer": "Gigahertz",
        "incorrect_answers": [
            "Gigahotz",
            "Gigahetz",
            "Gigahatz"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which computer hardware device is the BIOS chip located?",
        "correct_answer": "Motherboard",
        "incorrect_answers": [
            "Hard Disk Drive",
            "Central Processing Unit",
            "Graphics Processing Unit"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        "correct_answer": "Final",
        "incorrect_answers": [
            "Static",
            "Private",
            "Public"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
        "correct_answer": "C#",
        "incorrect_answers": [
            "Java",
            "C++",
            "Objective-C"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Nvidia's headquarters are based in which Silicon Valley city?",
        "correct_answer": "Santa Clara",
        "incorrect_answers": [
            "Palo Alto",
            "Cupertino",
            "Mountain View"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the most preferred image format used for logos in the Wikimedia database?",
        "correct_answer": ".svg",
        "incorrect_answers": [
            ".png",
            ".jpeg",
            ".gif"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the name given to Android 4.3?",
        "correct_answer": "Jelly Bean",
        "incorrect_answers": [
            "Lollipop",
            "Nutella",
            "Froyo"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In web design, what does CSS stand for?",
        "correct_answer": "Cascading Style Sheet",
        "incorrect_answers": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which day did the World Wide Web go online?",
        "correct_answer": "December 20, 1990",
        "incorrect_answers": [
            "December 17, 1996",
            "November 12, 1990",
            "November 24, 1995"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the code name for the mobile operating system Android 7.0?",
        "correct_answer": "Nougat",
        "incorrect_answers": [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        "correct_answer": "Micronesia",
        "incorrect_answers": [
            "Fiji",
            "Tuvalu",
            "Marshall Islands"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "While Apple was formed in California, in which western state was Microsoft founded?",
        "correct_answer": "New Mexico",
        "incorrect_answers": [
            "Washington",
            "Colorado",
            "Arizona"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "How many kilobytes in one gigabyte (in decimal)?",
        "correct_answer": "1000000",
        "incorrect_answers": [
            "1024",
            "1000",
            "1048576"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Generally, which component of a computer draws the most power?",
        "correct_answer": "Video Card",
        "incorrect_answers": [
            "Hard Drive",
            "Processor",
            "Power Supply"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which one of these is not an official development name for a Ubuntu release?",
        "correct_answer": "Mystic Mansion",
        "incorrect_answers": [
            "Trusty Tahr",
            "Utopic Unicorn",
            "Wily Werewolf"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the server hosting industry IaaS stands for...",
        "correct_answer": "Infrastructure as a Service",
        "incorrect_answers": [
            "Internet as a Service",
            "Internet and a Server",
            "Infrastructure as a Server"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Red",
            "Blue",
            "Yellow"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
        "correct_answer": "Heat Sink",
        "incorrect_answers": [
            "CPU Vent",
            "Temperature Decipator",
            "Heat Vent"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which computer language would you associate Django framework with?",
        "correct_answer": "Python",
        "incorrect_answers": [
            "C#",
            "C++",
            "Java"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Who is the original author of the realtime physics engine called PhysX?",
        "correct_answer": "NovodeX",
        "incorrect_answers": [
            "Ageia",
            "Nvidia",
            "AMD"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which operating system was released first?",
        "correct_answer": "Mac OS",
        "incorrect_answers": [
            "Windows",
            "Linux",
            "OS/2"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The numbering system with a radix of 16 is more commonly referred to as ",
        "correct_answer": "Hexidecimal",
        "incorrect_answers": [
            "Binary",
            "Duodecimal",
            "Octal"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is known as &quot;the brain&quot; of the Computer?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
            "Motherboard",
            "Graphics Processing Unit",
            "Keyboard"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which data structure does FILO apply to?",
        "correct_answer": "Stack",
        "incorrect_answers": [
            "Queue",
            "Heap",
            "Tree"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does the term GPU stand for?",
        "correct_answer": "Graphics Processing Unit",
        "incorrect_answers": [
            "Gaming Processor Unit",
            "Graphite Producing Unit",
            "Graphical Proprietary Unit"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "America Online (AOL) started out as which of these online service providers?",
        "correct_answer": "Quantum Link",
        "incorrect_answers": [
            "CompuServe",
            "Prodigy",
            "GEnie"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "This mobile OS held the largest market share in 2012.",
        "correct_answer": "iOS",
        "incorrect_answers": [
            "Android",
            "BlackBerry",
            "Symbian"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of these people was NOT a founder of Apple Inc?",
        "correct_answer": "Jonathan Ive",
        "incorrect_answers": [
            "Steve Jobs",
            "Ronald Wayne",
            "Steve Wozniak"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When did the online streaming service &quot;Mixer&quot; launch?",
        "correct_answer": "2016",
        "incorrect_answers": [
            "2013",
            "2009",
            "2011"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which programming language was developed by Sun Microsystems in 1995?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Python",
            "Solaris OS",
            "C++"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
        "correct_answer": "Transport",
        "incorrect_answers": [
            "Session",
            "Data link",
            "Network"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which programming language shares its name with an island in Indonesia?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Python",
            "C",
            "Jakarta"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does RAID stand for?",
        "correct_answer": "Redundant Array of Independent Disks",
        "incorrect_answers": [
            "Rapid Access for Indexed Devices",
            "Range of Applications with Identical Designs",
            "Randomized Abstract Identification Description"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In computing, what does LAN stand for?",
        "correct_answer": "Local Area Network",
        "incorrect_answers": [
            "Long Antenna Node",
            "Light Access Node",
            "Land Address Navigation"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many bytes are in a single Kibibyte?",
        "correct_answer": "1024",
        "incorrect_answers": [
            "2400",
            "1000",
            "1240"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The teapot often seen in many 3D modeling applications is called what?",
        "correct_answer": "Utah Teapot",
        "incorrect_answers": [
            "Pixar Teapot",
            "3D Teapot",
            "Tennessee Teapot"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the number of keys on a standard Windows Keyboard?",
        "correct_answer": "104",
        "incorrect_answers": [
            "64",
            "94",
            "76"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Unix Time is defined as the number of seconds that have elapsed since when?",
        "correct_answer": "Midnight, January 1, 1970",
        "incorrect_answers": [
            "Midnight, July 4, 1976",
            "Midnight on the creator of Unix's birthday",
            "Midnight, July 4, 1980"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does the 'S' in the RSA encryption algorithm stand for?",
        "correct_answer": "Shamir",
        "incorrect_answers": [
            "Secure",
            "Schottky",
            "Stable"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
        "correct_answer": "Cherry MX Blue",
        "incorrect_answers": [
            "Cherry MX Black",
            "Cherry MX Red",
            "Cherry MX Brown"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which kind of algorithm is Ron Rivest not famous for creating?",
        "correct_answer": "Secret sharing scheme",
        "incorrect_answers": [
            "Hashing algorithm",
            "Asymmetric encryption",
            "Stream cipher"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Who is the founder of Palantir?",
        "correct_answer": "Peter Thiel",
        "incorrect_answers": [
            "Mark Zuckerberg",
            "Marc Benioff",
            "Jack Dorsey"
        ]
    }
]


def load_from_json(is_test_enviroment):
    for question_to_load in questions:
        old_question = Question.find_by_title(question_to_load["question"])
        first = randint(1,4)
        question_to_load["incorrect_answers"].append(question_to_load["correct_answer"])

        if (is_test_enviroment):
            choices = [question_to_load["incorrect_answers"][(0 + x) % 4] for x in range(0, 4)]
        else:
            choices = [question_to_load["incorrect_answers"][(first+x)%4] for x in range(0,4)]
        if len(old_question) == 0:
            question = dict(title=question_to_load["question"],
                            alt1=choices[0],
                            alt2=choices[1],
                            alt3=choices[2],
                            alt4=choices[3],
                            answer=next(index for index, value in enumerate(choices) if value == question_to_load["correct_answer"])
                            )
            new_question = Question(**question)
            Question.save_to_db(new_question)
