setInterval(() => {
    // Ek naya Date object banate hain taaki current time le sakein
    let d = new Date();
    
    // Current hour, minute aur second nikalte hain
    let htime = d.getHours();     // Abhi ka ghanta
    let mtime = d.getMinutes();   // Abhi ka minute
    let stime = d.getSeconds();   // Abhi ka second
    
    // Clock ke hands ke rotation angle calculate karte hain
    let hrotation = 30 * htime + mtime / 2; // Hour hand har ghante 30 degree aur har minute 0.5 degree ghoomta hai
    let mrotation = 6 * mtime;              // Minute hand har minute 6 degree ghoomta hai
    let srotation = 6 * stime;              // Second hand har second 6 degree ghoomta hai
    
    // Jo rotation angles calculate kiye hain, unko clock ke hands par apply karte hain
    hour.style.transform = `rotate(${hrotation}deg)`;   // Hour hand ko ghoomate hain
    minute.style.transform = `rotate(${mrotation}deg)`; // Minute hand ko ghoomate hain
    second.style.transform = `rotate(${srotation}deg)`; // Second hand ko ghoomate hain
    
}, 1000); // Yeh function har 1 second (1000 milliseconds) me execute hoga

/*
Explanation:
1. setInterval() ke andar ka function har second chalta hai.
2. Date() object ka use karke hum current time nikalte hain.
3. Har ek clock hand ke rotation angles calculate kiye jate hain:
   - Hour hand: Har ghante 30 degree aur har minute 0.5 degree ghoomta hai.
   - Minute hand: Har minute 6 degree ghoomta hai (360 degrees / 60 minutes).
   - Second hand: Har second 6 degree ghoomta hai (360 degrees / 60 seconds).
4. Yeh calculated angles CSS ke transform property ke through clock ke hands par apply karte hain.
5. Iss process se clock ke hands smoothly move karte hain aur current time dikhate hain.

Example Output (Agar current time 3:15:30 ho):
- Hour hand 97.5 degrees par rotate karega (3*30 + 15/2 = 90 + 7.5)
- Minute hand 90 degrees par rotate karega (15*6 = 90)
- Second hand 180 degrees par rotate karega (30*6 = 180)
*/