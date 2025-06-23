// ThoughtBubble3D.jsx
import { useEffect, useRef, useState } from 'react';
import { Text, RoundedBox } from '@react-three/drei';

const thoughts = [
    "If the universe is infinite, does that mean there's a version of me that became a couch?",
    "Do shadows exist, or are they just where the universe gave up?",
    "I think, therefore I'm probably overthinking.",
    "If time is money, do rich people live longer in meetings?",
    "What if déjà vu is just buffering?",
    "Maybe the moon is just Earth’s distant eyeball.",
    "Does a thought exist if no one likes it on social media?",
    "Is reality just a really detailed hallucination with taxes?",
    "What if I’m not a potato dreaming of the world, but the world dreaming of a potato?",
    "If gravity is real, why haven’t my emotions come back down yet?",
    "I peeled away my layers and still found starch. What does that say about me?",
    "If I go bad in a pantry, is that just rot or a spiritual awakening?",
    "I contain multitudes. Mostly carbs, but still.",
    "Who assigned meaning to meaning?",
    "Why do I know I’m conscious but not how Wi-Fi works?",
    "If I’m made of atoms, and atoms are mostly empty space, am I basically just a rumor?",
    "If nobody’s watching the oven light, is it really on?",
    "Do mirrors age, or are they forever young and silently judging?",
    "If time flies, why does Monday walk?",
    "If the Earth is spinning, why can’t I feel dizzy on purpose?",
    "Is cereal just breakfast soup, or is soup a liquid salad?",
    "If I uninstall sleep, will I gain storage in my brain?",
    "What if dreams are just alternate timelines leaking through bad memory management?",
    "If I peel myself enough, do I become emotionally transparent?",
    "Maybe the Big Bang was just the universe sneezing.",
    "If two wrongs don’t make a right, do three wrongs create a committee?",
    "Do worms see me as a god or just a dumb root?",
    "If free will exists, why do I keep eating chips I don’t even want?",
    "What if the voices in my head are just me from other universes giving bad advice?",
    "If I scream into the void and the void screams back, is that a conversation?",
    "Do thoughts have calories? Because I’ve been stress-snacking on anxiety.",
    "If I imagine myself flying, is that exercise?",
    "Is language just mouth-based teleportation of confusion?",
    "What if clouds are just sky-thoughts waiting to cry?",
    "Do penguins dream of warm places, or just revenge?",
    "If Wi-Fi is invisible, how do I trust it’s real and not emotional gaslighting?",
    "If I’m offline, do I cease to exist socially?",
    "Is toast just bread that knows too much?",
    "If the brain named itself, can it be trusted?",
    "If reality was a simulation, would there be a ‘skip tutorial’ button?",
    "If I blink too fast, do I miss alternate timelines?",
    "Are stars just night-time pores of the universe’s skin?",
    "If I press Ctrl+Z on my life, does anything actually undo?",
    "What if nostalgia is just brain-lag?",
    "Is a conspiracy theory just a bedtime story for adults?",
    "Are elevators time machines for vertical sadness?",
    "If emotions are real, why don’t they come with patch notes?",
    "Does the universe have a settings menu, and did someone disable chill?",
    "If potatoes had consciousness, would they still let us mash them?",
    "What if I’m the dream of a potato in a deeper reality that hasn’t boiled yet?",
    "If I say nothing, am I thinking loudly or quietly exploding?",
    "Is déjà vu just the universe saying 'you glitched again'?",
    "If I mute the world, does my brain start buffering?",
    "What if gravity is just the Earth saying 'stay down, peasant'?",
    "Are clouds just the Earth’s loading screen?",
    "Do thoughts expire if left unspoken too long?",
    "If silence is golden, why do I only hear existential static?",
    "What if reality is just a potato’s dream... and I’m the potato?",
];


export default function ThoughtBubble3D({ camera, position = [0, 3.5, 0] }) {
    const [thought, setThought] = useState('');
    const groupRef = useRef();

    // Change thoughts every few seconds
    useEffect(() => {
        const pickRandom = () => thoughts[Math.floor(Math.random() * thoughts.length)];
        setThought(pickRandom());
        const interval = setInterval(() => setThought(pickRandom()), 6000);
        return () => clearInterval(interval);
    }, []);

    // Make the group face the camera every frame
    useEffect(() => {
        if (!groupRef.current || !camera) return;
        const animate = () => {
            groupRef.current.lookAt(camera.position);
            requestAnimationFrame(animate);
        };
        animate();
    }, [camera]);

    return (
        <group ref={groupRef} position={position}>
            {/* Bubble Background */}
            <RoundedBox
                args={[3, 1.5, 0.1]} // width, height, depth
                radius={0.2}
                smoothness={4}
            >
                <meshStandardMaterial color="white" />
            </RoundedBox>

            {/* Thought Text */}
            <Text
                position={[0, 0, 0.06]} // slightly in front
                fontSize={0.25}
                color="black"
                maxWidth={2.5}
                anchorX="center"
                anchorY="middle"
            >
                {thought}
            </Text>
        </group>
    );
}
