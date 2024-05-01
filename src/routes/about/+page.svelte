<script lang="ts">
  import Spacer from "../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import { calculateAge } from "../../utils/dateUtils";

  let birthDate: string = "1996-12-22";
  const age = calculateAge(birthDate);
</script>

<section id="about-page">
  <Spacer multiplier={10} />
  <section id="about-me">
    <h1>
      <Typography variant="span" type="subtitle">I'm</Typography>
      <Typography variant="span" type="subtitle2" color="var(--color-lilac)">
        Jenny Sun,
      </Typography>
      <Typography variant="span" type="subtitle">
        a creative developer <br /> based in
      </Typography>
      <Typography variant="span" type="subtitle2" color="var(--color-lilac)"
        >The Netherlands.
      </Typography>
    </h1>
    <Spacer />
    <div id="about-description">
      <Typography variant="p" type="body">
        My name is Jenny Sun and currently I am {age} years old. I graduated from
        the University of Applied Sciences called 'Hogeschool van Amsterdam (HvA)'
        with a bachelor degree for “Game Development”. My biggest experience has
        been working at Robot Kittens as a Creative Developer. There are multiple
        characteristics which describe me, but I define myself as an ambitious, adventurous
        perfectionist. In my spare time I am usually occupied with gaming, drawing,
        creating pixel art or going out with friends to take aesthetic pictures of
        food.
        <br /><br />
        My Full Story Ever since I was a little child, I have been intrigued by games.
        This virtual world which was unknown to me and full of adventure and excitement
        fascinated me. Every day was a fun day when spending time gaming. The first
        time I engaged with games was when I received a Game Cube for my birthday.
        This was to me just a strange little box in which you could attach controllers
        to. Yet this box was really magical to me. With just a press on the start
        button, another world opened before my eyes - the dark TV screen, suddenly
        got filled with pretty colors and cool characters which I could control with
        just a few movements and buttons on my controller. My eyes sparkled at this
        sight and when my character moved from its place, I could finally start my
        big adventure.
        <br /><br />
        Mario, Zelda, Super Smash Bros, but also Harvest Moon and Animal Crossing
        are part of this most precious childhood. They represent the spark to my
        passion and love for games, but also technology. The feelings that games
        have invoked inside of me are the reason why I want to become a developer.
        These magical and fantasy-like feelings which Nintendo was able to give me,
        is something I would like to pass down to the next generations. I want to
        be the reason why people fall in love with games or digital technology, just
        like the way I did. I want them to share the same passion and dream like
        me. I want to show the whole world that magic does exist, that nothing is
        impossible and can happen as long as you put your heart and soul into it.
        The love that Nintendo has given to me, is something I will show by the efforts
        I put in the things I create.
      </Typography>
    </div>
    <Spacer multiplier={16} />
  </section>
</section>

<style lang="scss">
  #about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #about-me {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 500px;
  }
</style>
