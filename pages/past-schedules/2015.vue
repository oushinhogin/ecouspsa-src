<template>
  <section class="section content">
    <div class="container" id="uspsa_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="13" style="text-align: center;">
                <h3>USPSA Matches 2015</h3>
                (past schedules:
                  <nuxt-link to="/past-schedules/2013">2013</nuxt-link>,
                  <nuxt-link to="/past-schedules/2014">2014</nuxt-link>)
              </th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Location</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><nuxt-link to="/clubs#AGC">AGC</nuxt-link></td>
              <td>Aurora (Sunday)</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>5</td>
              <td class="qualifier">3</td>
              <td>7</td>
              <td>5</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#CRCPS">CRCPS</nuxt-link></td>
              <td>Byers</td>
              <td>10</td>
              <td>14</td>
              <td>14</td>
              <td>11</td>
              <td>9</td>
              <td>13</td>
              <td class="superclassifier">11</td>
              <td class="qualifier">8</td>
              <td class="majormatch">11-13<sup>3</sup></td>
              <td></td>
              <td>14</td>
              <td>12</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#PPPS">PPPS</nuxt-link></td>
              <td>Pueblo</td>
              <td>11</td>
              <td>8</td>
              <td>8</td>
              <td class="qualifier">12</td>
              <td>10</td>
              <td>14</td>
              <td>12</td>
              <td>9</td>
              <td>13</td>
              <td>11</td>
              <td>8</td>
              <td>13</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#BRC">BRC</nuxt-link></td>
              <td>Boulder</td>
              <td>11</td>
              <td>8</td>
              <td>8</td>
              <td>12</td>
              <td>10</td>
              <td class="qualifier">14</td>
              <td>12</td>
              <td>9</td>
              <td>13</td>
              <td>11</td>
              <td>8</td>
              <td>13</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#HPPS">HPPS</nuxt-link></td>
              <td>Ramah</td>
              <td>17</td>
              <td>21</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
              <td class="majormatch">19-21<sup>1</sup></td>
              <td>18</td>
              <td class="qualifier">15</td>
              <td>19</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#WCPS">WCPS</nuxt-link></td>
              <td>Weld County</td>
              <td>18</td>
              <td>15</td>
              <td>15</td>
              <td>19</td>
              <td class="majormatch">29-31<sup>2</sup></td>
              <td>21</td>
              <td>19</td>
              <td>16</td>
              <td class="qualifier">20</td>
              <td>18</td>
              <td>15</td>
              <td>20</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#PSAC">PSAC</nuxt-link></td>
              <td>Aurora (Saturday)</td>
              <td>24</td>
              <td>28</td>
              <td>28</td>
              <td>25</td>
              <td>23</td>
              <td>27</td>
              <td>25</td>
              <td>22</td>
              <td>26</td>
              <td class="qualifier">24</td>
              <td>28</td>
              <td>26</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#CCPS">CCPS</nuxt-link></td>
              <td>Dumont</td>
              <td></td>
              <td></td>
              <td>22</td>
              <td>26</td>
              <td>24</td>
              <td>28</td>
              <td>26</td>
              <td class="qualifier">23</td>
              <td>27</td>
              <td>25</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#YVPS">YVPS</nuxt-link></td>
              <td>Steamboat</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>9</td>
              <td>13</td>
              <td>11</td>
              <td>8</td>
              <td class="qualifier">12</td>
              <td>10</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#WPPS">WPPS</nuxt-link></td>
              <td>Colo. Spgs.</td>
              <td>5</td>
              <td>2</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
              <td>3</td>
              <td></td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
            </tr>          
            <!--
              <tr>
              <td><nuxt-link to="/clubs#BRC">BRC Indoor</nuxt-link><sup>1</sup></td>
              <td>Boulder</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
            -->          
            <tr>
              <td><nuxt-link to="/clubs#CGC">CGC</nuxt-link></td>
              <td>Centennial</td>
              <td>25</td>
              <td>22</td>
              <td>29</td>
              <td>26</td>
              <td>31</td>
              <td>28</td>
              <td>26</td>
              <td>30</td>
              <td>27</td>
              <td>25</td>
              <td>29</td>
              <td>27</td>
            </tr>
            <tr>
              <td>Bristlecone</td>
              <td>Lakewood</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>20</td>
              <td>17</td>
              <td class="superclassifier">15</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>

        <!-- <p>1. Wednesdays, 1st squad 4pm, 2nd squad 6pm. Space is limited so please call James Casanova at 303-550-9893 so we can balance the squads.</p> -->
        <!-- <p>2. 2014 Mile High Showdown @ ?club?, ?dates?</p> -->
        <!-- <p>3. 2014 Rocky Mountain 300 @ Weld, May ?dates?</p> -->
        <!-- <p>1. 2014 Rocky Mountain 300 @ Weld, May 30th through June 1st, More info <a href="http://rockymountain300.weebly.com">here</a>, Application <a href="/miscstatic/RM_300_APP.doc">here</a></p> -->
        <p>1. 2015 Mile High Showdown @ Ben Lomond (HPPS), June 19-21. <a href="http://milehighshowdown2015.weebly.com">Official Match Website</a></p>
        <p>2. 2015 Rocky Mountain 300 @ Weld, May 29-31. <a href="/miscstatic/RM_300_LETTER_2015.docx">[Match flyer]</a>. <a href="/miscstatic/RM_300_APP_2015.doc">[Match application form]</a>.</p>
        <p>3. 2015 Colorado State USPSA Championship @ Colorado Rifle Club, September 11-13. <a href="http://coloradostateuspsa.weebly.com">[Match website]</a>. <a href="/miscstatic/2015_colorado_state_uspsa_pistol_championship.pdf">[Match application form]</a>.</p>
        <p>All early spring, late fall, and winter matches are subject to advance cancellation due to range conditions, weather, or weather forecasts.  Keep an eye on the <nuxt-link to="/results#googlegroup">Google Group</nuxt-link> for updates.</p>
      </div>

      <div class="row" style="padding: 20px;">
        <div class="span8 offset2" style="text-align: center;">
          <p><span class="qualifier">&nbsp;PINK is a Section Qualifier Match&nbsp;</span></p>
          <p><span class="superclassifier">&nbsp;BLUE is a Super Classifier Match&nbsp;</span></p>
          <p><span class="majormatch">&nbsp;GREEN is a Major Match&nbsp;</span></p>
          <p>In the event of a Qualifier match being cancelled, the next match at that club will 
            almost always become the make-up Qualifier. If this is not the case, details will be
            sent out on the <nuxt-link to="/results#googlegroup">Google Group</nuxt-link>.</p>
        </div>
      </div>

      <div>
        <h4>What is the Section Qualifier series? / How are Nationals slots awarded?</h4>

        <p>The Section Qualifier series is how the ECO section awards slots to USPSA Nationals. Every year, one match at each club is designated a Section Qualifier match. You must score in at least <b>3</b> such matches -- <i>in the same division</i> -- to be ranked in that year's Qualifier series. Your best 3 scores (as match percentages) from the series are averaged to produce your Qualifier series score. Once all scores are tallied, slots are offered to competitors in rank order.</p>

        <p>The section receivers a varying number of slots in each division each year, depending on how many total slots are available, how the divisions are scheduled at Nationals, and the level of participation in the section in that division that year. Limited is consistently the most popular division in ECO and tends to be awarded the most slots, followed by Open and Production.</p>

        <p>Note that just because we are awarded e.g. 9 slots to Open Nationals, it isn't necessarily true that the top 9 finishers in the Qualifier series will be the ones to get them! Attending Nationals is a significant committment of time and money, and not everyone who earns a slot will be able to use it. If a competitor declines their slot, it will be offered to the next highest ranked competitor, all the way down the list to last place! It is not uncommon for 20th place to be awarded a slot in this way, so if you want to go to Nationals it pays to shoot 3 Qualifiers even if you do not expect to rank highly. If slots remain after the rankings are exhausted, they will be offered to the section on a first-come first-served basis.</p>

        <p>If, at the conclusion of the Qualifier series, you did not win a slot, or if you wish to attend another National match (in another division), get on the waiting list as soon as it opens. Not every USPSA section awards slots in the same way, and some sections end up with some or all of their slots un-awarded. These slots are returned to USPSA and offered to people on the waiting list on a first-come first-served basis.</p>

        <h4>What are Super Classifier matches?</h4>

        <p>At our ordinary monthly matches, we shoot one Classifier stage. A Super Classifier match is a special match held with the permission of USPSA HQ which includes 4 or more Classifier stages. Super Classifier matches are a great way to get classified in a new division (since 4 Classifiers is the minimum you need), or raise your classification in a division you don't often shoot. Sometimes competitors shooting a division they don't usually shoot are willing to lend out their usual gear to another competitor who wants to try something different. This is a great way to get a day's experience shooting Limited or Open without spending big bucks, so ask around!</p>
      </div>
    </div> <!-- container -->

    <hr class="featurette-divider">

    <div class="container" id="3gun_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;"><h3>3-Gun Matches 2015</h3></th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="http://www.rm3g.com/">Johnson 3-Gun</a> / Raton, NM</td>
              <td></td>
              <td></td>
              <td>21,22<sup>2</sup></td>
              <td>18,19<sup>3</sup></td>
              <td>9, <span class="majormatch">30-31<sup>4</sup></span></td>
              <td>20</td>
              <td>18 or 19</td>
              <td class="majormatch">13-16<sup>5</sup></td>
              <td>19</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><a href="http://www.rm3g.com/">RM3G</a> / Raton, NM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>?</td>
              <td></td>
              <td></td>
              <td>?</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CRCPS / Byers</td>
              <td></td>
              <td>7</td>
              <td>7</td>
              <td>4</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><a href="http://www.coloradomultigun.com/">CO Multigun</a> / Weld<sup>1</sup></td>
              <td></td>
              <td></td>
              <td></td>
              <td>25</td>
              <td>23</td>
              <td>27</td>
              <td>25</td>
              <td>22</td>
              <td>26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p>1. 4th Saturday, 9:00am start, for more info contact Paul Clark Jr. 303-916-6573</p>
        <p>2. skills, come either day or both</p>
        <p>3. 3-Gun RO clinic April 18th, match April 19th, come both days or just Sunday</p>
        <p>4. He-Man Nationals, May 30-31</p>
        <p>5. Rocky Mountain 3-Gun World Championship, August 13-16</p>
      </div>
    </div> <!-- container -->

    <hr class="featurette-divider">

    <div class="container" id="rifle_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;"><h3>Rifle Matches 2015</h3></th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boulder 5th Sun (or Sat)</td>
              <td>31</td>
              <td></td>
              <td>29</td>
              <td></td>
              <td>31</td>
              <td></td>
              <td></td>
              <td>30</td>
              <td></td>
              <td>31</td>
              <td>29</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="mailto:pueblorifle@gmail.com">Pueblo Sniper / Prairie Dog</a> 9am &amp; 12am, 3rd Sat, $10</td>
              <td>17</td>
              <td>21</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
              <td>20</td>
              <td>18</td>
              <td>15</td>
              <td>19</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
            </tr>
            <tr>
              <td><a href="mailto:pueblorifle@gmail.com">Pueblo Tactical Rifle</a> Setup 7am, Start 10am, 4th Sun, $15</td>
              <td></td>
              <td></td>
              <td></td>
              <td>26</td>
              <td>24</td>
              <td>28</td>
              <td>26</td>
              <td>23</td>
              <td>27</td>
              <td>25</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        More information on the Pueblo rifle matches can be found at <a href="http://www.ar-15.co/forums/114-Shooting-Sports-and-Events">CO AR-15</a>
      </div>     
    </div>

    <hr class="featurette-divider">

    <div class="container" id="steel_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;"><h3>Steel Matches 2015</h3></th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="http://www.wcfw.org">Weld</a> 1st Sat</td>
              <td>3</td>
              <td>7</td>
              <td>7</td>
              <td>4</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
              <td>1</td>
              <td>5</td>
              <td>3</td>
              <td>7</td>
              <td>5</td>
            </tr>
            <tr>
              <td>CRC 3rd Sat</td>
              <td>17</td>
              <td>21</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
              <td>20</td>
              <td>18</td>
              <td>15</td>
              <td>19</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
            </tr>
            <tr>
              <td>NSSF Rimfire Challenge<br/>(@ CRC)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><a href="mailto:pueblosteel@gmail.com">Pueblo</a> 4pm Wed</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- <p>1. 2014 Colorado State Steel Challenge @ Weld, ?dates?</p> -->
      </div>

      <div style="padding: 10px;">
        <p><a href="/miscstatic/steel_challenge.pdf">Steel Challenge info</a></p>

        <p><a href="http://steelchallenge.com">official Steel Challenge website</a></p>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="container" id="idpa_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;"><h3>IDPA Matches 2015</h3></th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clear Creek 2nd Sat</td>
              <td></td>
              <td></td>
              <td>14</td>
              <td>11</td>
              <td>9</td>
              <td>13</td>
              <td>11</td>
              <td>8</td>
              <td>12</td>
              <td>10</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CRC (Byers) 4th Sat</td>
              <td>24</td>
              <td>28</td>
              <td>28</td>
              <td>25</td>
              <td>23</td>
              <td>27</td>
              <td>25</td>
              <td>22</td>
              <td>26</td>
              <td>24</td>
              <td>28</td>
              <td>26</td>
            </tr>
          </tbody>
        </table>
      </div>     
    </div>

    <hr class="featurette-divider">

    <div class="container" id="bianchi_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;"><h3>Bianchi Matches 2015</h3></th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aurora 2nd Sat</td>
              <td>10</td>
              <td>14</td>
              <td>14</td>
              <td>11</td>
              <td>9</td>
              <td>13</td>
              <td>11</td>
              <td>8</td>
              <td>12</td>
              <td>10</td>
              <td>14</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>     

      (Confirmation e-mail will be sent out for each match if there is sufficient interest)
    </div>
  </section>
</template>
