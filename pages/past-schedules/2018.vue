<template>
  <section class="section content">
    <div class="container" id="uspsa_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="13" style="text-align: center;">
                <h3>USPSA Matches 2018</h3>
                (past schedules:
                  <nuxt-link to="/past-schedules/2013">2013</nuxt-link>,
                  <nuxt-link to="/past-schedules/2014">2014</nuxt-link>,
                  <nuxt-link to="/past-schedules/2015">2015</nuxt-link>,
                  <nuxt-link to="/past-schedules/2016">2016</nuxt-link>,
                  <nuxt-link to="/past-schedules/2017">2017</nuxt-link>)
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
              <td><nuxt-link to="/clubs#PSAC">PSAC</nuxt-link></td>
              <!-- 1st sunday -->
              <td>Aurora (Sunday)</td>
              <td>7</td>
              <td>4</td>
              <td>4</td>
              <td>1</td>
              <td class="qualifier">6</td>
              <td>3</td>
              <td>1</td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
              <td>4</td>
              <td>2</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#CRCPS">CRCPS</nuxt-link></td>
              <!-- 2nd saturday -->
              <td>Byers</td>
              <td>13</td>
              <td>10</td>
              <td>10</td>
              <td></td>
              <td class="superclassifier">12</td>
              <td>9</td>
              <td class="qualifier">14</td>
              <td>11</td>
              <td class="majormatch">7-9<sup>1</sup></td>
              <td>13</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#PPPS">PPPS</nuxt-link></td>
              <!-- 2nd sunday -->
              <td>Pueblo</td>
              <td>14</td>
              <td>11</td>
              <td>11</td>
              <td class="qualifier">8</td>
              <td>13</td>
              <td>10</td>
              <td>8</td>
              <td>12</td>
              <td>9</td>
              <td class="superclassifier">14</td>
              <td>11</td>
              <td>9</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#BRC">BRC</nuxt-link></td>
              <!-- 2nd sunday -->
              <td>Boulder</td>
              <td>14</td>
              <td>11</td>
              <td>11</td>
              <td>8</td>
              <td>13</td>
              <td class="qualifier">10</td>
              <td>8</td>
              <td>12</td>
              <td>9</td>
              <td>14</td>
              <td>11</td>
              <td>9</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#HPPS">HPPS</nuxt-link></td>
              <!-- 3rd saturday -->
              <td>Ramah</td>
              <td>20</td>
              <td>17</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td class="qualifier">18</td>
              <td>15</td>
              <td>20</td>
              <td>17</td>
              <td>15</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#WCPS">WCPS</nuxt-link></td>
              <!-- 3rd sunday -->
              <td>Weld County</td>
              <td>21</td>
              <td>18</td>
              <td>18</td>
              <td>15</td>
              <td>20</td>
              <td class="majormatch">1-3<sup>2</sup></td>
              <td>15</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td class="qualifier">18</td>
              <td>16</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#PSAC">PSAC</nuxt-link></td>
              <!-- 4th saturday -->
              <td>Aurora (Saturday)</td>
              <td>27</td>
              <td>24</td>
              <td>24</td>
              <td>28</td>
              <td>26</td>
              <td>23</td>
              <td>28</td>
              <td>25</td>
              <td>22</td>
              <td>27</td>
              <td>24</td>
              <td>22</td>
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#CCPS">CCPS</nuxt-link></td>
              <!-- 4th sunday -->
              <td>Dumont</td>
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
              <td>25</td>
              <td>22</td>
              <td>27</td>
              <td>24</td>
              <td>22</td>
              <td class="qualifier">26</td>
              <td>23</td>
              <td>28</td>
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#YVPS">YVPS</nuxt-link></td>
              <!-- 2nd saturday -->
              <td>Steamboat</td>
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
              <td>12</td>
              <td>9</td>
              <td>14</td>
              <td class="qualifier">11</td>
              <td>8</td>
              <td>13</td>
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
            </tr>
            <tr>
              <td><nuxt-link to="/clubs#WPPS">WPPS</nuxt-link></td>
              <!-- 1st monday -->
              <td>Colo. Spgs.</td>
              <td></td>
              <td>5</td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
              <td>4</td>
              <td>2</td>
              <td>6</td>
              <td></td>
              <!-- labor day = range closed -->
              <td>1</td>
              <td>5</td>
              <td>3</td>
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
              <!-- last sunday -->
              <td>Centennial</td>
              <td>28</td>
              <td>25</td>
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
              <td><nuxt-link to="/clubs#BPS">BPS</nuxt-link></td>
              <!-- 3rd wednesday until December of 18 -->
              <td>Lakewood</td>
              <td>17</td>
              <td>21</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
              <td>20</td>
              <td>18</td>
              <td>15</td>
              <td>19</td>
              <td>18</td>
              <td>21</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>

        <p>All early spring, late fall, and winter matches are subject to advance cancellation due to range conditions, weather, or weather forecasts. Keep an eye on the <nuxt-link to="/results#googlegroup">Google Group</nuxt-link> for updates.</p>

        <p>1. 2018 Colorado State Championship @ Colorado Rifle Club (CRCPS), September 7-9. <a href="http://coloradostateuspsa.weebly.com/">Official Match Website</a></p>

        <p>2. 2018 Rocky Mountain 300 @ Weld County Fish and Wildlife (WCPS), June 1-3. <a href="http://rockymountain300.weebly.com/">Official Match Website</a></p>
      </div>

      <div class="row" style="padding: 20px;">
        <div class="span8 offset2" style="text-align: center;">
          <p><span class="qualifier">&nbsp;PINK is a Section Qualifier Match&nbsp;</span></p>

          <p><span class="superclassifier">&nbsp;BLUE is a Super Classifier Match&nbsp;</span></p>

          <p><span class="majormatch">&nbsp;GREEN is a Major Match&nbsp;</span></p>

          <p>In the event of a Qualifier match being cancelled, the next match at that club will almost always become the make-up Qualifier. If this is not the case, details will be sent out on the <nuxt-link to="/results#googlegroup">Google Group</nuxt-link>.</p>
        </div>
      </div>

      <div>
        <h4>What is the Section Qualifier series? / How are Nationals slots awarded?</h4>

        <p>The Section Qualifier series is how the ECO section awards slots to USPSA Nationals. Every year, one match at each club is designated a Section Qualifier match. You must score in at least <b>3</b> such matches -- <i>in the same division</i> -- to be ranked in that year&#39;s Qualifier series. Your best 3 scores (as match percentages) from the series are averaged to produce your Qualifier series score. Once all scores are tallied, slots are offered to competitors in rank order.</p>

        <p>The section receivers a varying number of slots in each division each year, depending on how many total slots are available, how the divisions are scheduled at Nationals, and the level of participation in the section in that division that year. Limited is consistently the most popular division in ECO and tends to be awarded the most slots, followed by Open and Production.</p>

        <p>Note that just because we are awarded e.g. 9 slots to Open Nationals, it isn&#39;t necessarily true that the top 9 finishers in the Qualifier series will be the ones to get them! Attending Nationals is a significant committment of time and money, and not everyone who earns a slot will be able to use it. If a competitor declines their slot, it will be offered to the next highest ranked competitor, all the way down the list to last place! It is not uncommon for 20th place to be awarded a slot in this way, so if you want to go to Nationals it pays to shoot 3 Qualifiers even if you do not expect to rank highly. If slots remain after the rankings are exhausted, they will be offered to the section on a first-come first-served basis.</p>

        <p>If, at the conclusion of the Qualifier series, you did not win a slot, or if you wish to attend another National match (in another division), get on the waiting list as soon as it opens. Not every USPSA section awards slots in the same way, and some sections end up with some or all of their slots un-awarded. These slots are returned to USPSA and offered to people on the waiting list on a first-come first-served basis.</p>

        <h4>What are Super Classifier matches?</h4>

        <p>At our ordinary monthly matches, we shoot one Classifier stage. A Super Classifier match is a special match held with the permission of USPSA HQ which includes 4 or more Classifier stages. Super Classifier matches are a great way to get classified in a new division (since 4 Classifiers is the minimum you need), or raise your classification in a division you don&#39;t often shoot. Sometimes competitors shooting a division they don&#39;t usually shoot are willing to lend out their usual gear to another competitor who wants to try something different. This is a great way to get a day&#39;s experience shooting Limited or Open without spending big bucks, so ask around!</p>
      </div>
    </div>
    <!-- container -->

    <hr class="featurette-divider" />
    <div class="container" id="3gun_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;">
                <h3>Multi-Gun Matches 2018</h3>
              </th>
            </tr>
            <tr>
              <th>Club</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
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
              <td><a href="http://johnson3gun.webs.com/">Johnson 3-Gun</a>/<a href="http://www.rm3g.com/">RM3G</a> / Raton, NM</td>
              <td></td>
              <td></td>
              <td>17</td>
              <td class="twogunmatch">18</td>
              <td>14&amp;15&nbsp;<sup>5</sup></td>
              <td class="majormatch">19-20<sup>2</sup></td>
              <td class="twogunmatch">30<sup>4</sup>--></td>
              <td class="twogunmatch">1<sup>4</sup></td>
              <td class="majormatch">9-12<sup>3</sup></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan=14><a href="http://www.coloradoactionshooting.com/crc-multigun.html">CRCPS / Byers pending schedule</a></td>
            </tr>
            <tr>
              <td colspan=14><a href="https://www.facebook.com/bigbenmultigun/">Big Ben Multigun (BLGC, Ramah)</a>, schedule varies, check site</td>
            </tr>
            <tr>
              <td colspan=14><a href="https://www.facebook.com/SoCo3Gun/">SoCo 3-Gun (PPGC, CO Springs)</a>, schedule varies, check site, pre-registration is mandatory!</td>
            </tr>
            <tr>
              <td><a href="https://practiscore.com/clubs/wcfw-multi-gun">WCFW Multigun</a> / Weld<sup>1</sup></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>28</td>
              <td>26</td>
              <td>23</td>
              <td>28</td>
              <td>25</td>
              <td>22</td>
              <td>27</td>
              <td>24</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p>1. 4th Saturday, 9:00am start, primary contact is <a href="mailto:aboldt@aol.com">Andrew Boldt</a> 970-539-3390</p>

        <p>2. 2018 He-Man Nationals&nbsp;@ Rocky Mountain 3Gun, May 19-20. <a href="http://heman3gun.webs.com/">Official Match Website</a></p>

        <p>3.&nbsp;Rocky Mountain 3-Gun World Championship 2018. August 9-12. <a href="http://rm3g.com/">Official Match Website</a></p>

        <p>4.&nbsp;<a href="http://johnson3gun.webs.com/2-rifle-june-30-july-1-2018">Nightforce P/T 2-rifle match</a> Jun 30 - Jul 1</p>

        <p>5.&nbsp;April 14, 2017&nbsp;RO Clinic&nbsp;followed by match on&nbsp;April 15&nbsp;(come both or just Sunday)</p>
      </div>

      <div class="row" style="padding: 20px;">
        <div class="span8 offset2" style="text-align: center;">
          <p><span>&nbsp;White is a 3-Gun Match&nbsp;</span></p>

          <p><span class="twogunmatch">&nbsp;Yellow is a 2-Rifle Match&nbsp;</span></p>

          <p><span class="majormatch">&nbsp;GREEN is a Major Match&nbsp;</span></p>
        </div>
      </div>
    </div>
    <!-- container -->

    <hr class="featurette-divider" />
    <div class="container" id="rifle_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;">
                <h3>Rifle Matches 2018</h3>
              </th>
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
              <td></td>
              <td></td>
              <td>31</td>
              <td>29</td>
              <td></td>
              <td>30</td>
              <td>29</td>
              <td></td>
              <td>30</td>
              <td></td>
              <td></td>
              <td>30</td>
            </tr>
            <tr>
              <td><a href="mailto:pueblorifle@gmail.com">Pueblo Sniper / Prairie Dog</a> 9am &amp; 12am, 3rd Sat, $10</td>
              <td>20</td>
              <td>17</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td>18</td>
              <td>15</td>
              <td>20</td>
              <td>17</td>
              <td>15</td>
            </tr>
            <tr>
              <td><a href="mailto:pueblorifle@gmail.com">Pueblo Tactical Rifle</a> Setup 7am, Start 9:30am, 4th Sun, $15</td>
              <td></td>
              <td></td>
              <td>25</td>
              <td>22</td>
              <td>27</td>
              <td>24</td>
              <td>22</td>
              <td>26</td>
              <td>23</td>
              <td>28</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        More information on the Pueblo rifle matches can be found at <a href="http://www.ar-15.co/forums/114-Shooting-Sports-and-Events">CO AR-15</a>
      </div>
    </div>

    <hr class="featurette-divider" />
    <div class="container" id="steel_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;">
                <h3>Steel Matches 2018</h3>
              </th>
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
              <td>6</td>
              <td>3</td>
              <td>3</td>
              <td>7</td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
              <td>3</td>
              <td>1</td>
            </tr>
            <tr>
              <td>CRC 3rd Sat</td>
              <td>20</td>
              <td>17</td>
              <td>17</td>
              <td>21</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td>18</td>
              <td>15</td>
              <td>20</td>
              <td>17</td>
              <td>15</td>
            </tr>
            <!-- <tr>
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
              </tr> -->
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

        <p><nuxt-link to="/clubs#YVPS">YVPS</nuxt-link> 4-stage Steel Challenge Match every Thursday evening starting at approximately 5:20 p.m. weather permitting. Through the 3rd Week in Sept.</p>

        <p>Contact <a href="mailto:dianaforrcrc@gmail.com  ">Diana Eubank</a> for details.&nbsp;970-620-0564</p>

        <div style="padding: 10px;">
          <p>1. 2018 Rocky Mountain Regional Steel Challenge, Pueblo West, 25-26 May. <a href="/miscstatic/2018_Steel_Challenge_Application.pdf">Flyer/Application</a></p>

          <p>2. 2018 Rimfire Challenge Shooting Association, Pueblo West, 22-23 June. <a href="/miscstatic/2018_RCSA_App.pdf">Flyer/Application</a></p>

          <p><a href="/miscstatic/steel_challenge.pdf">Steel Challenge info</a></p>

          <p><a href="http://steelchallenge.com">official Steel Challenge website</a></p>
        </div>

      </div>
    </div>

    <hr class="featurette-divider" />
    <div class="container" id="idpa_matches">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;">
                <h3>IDPA Matches 2018</h3>
              </th>
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
              <!-- nope -->
              <td></td>
              <!-- nope -->
              <td>10</td>
              <td>14</td>
              <td>12</td>
              <td>9</td>
              <td>14</td>
              <td>11</td>
              <td>8</td>
              <td>13</td>
              <td></td>
              <!-- nope -->
              <td></td>
              <!-- nope -->
            </tr>
            <tr>
              <td>PPGC (CO Springs) 3rd Sun</td>
              <td>21</td>
              <td>18</td>
              <td>18</td>
              <td>15</td>
              <td>20</td>
              <td>17</td>
              <td>15</td>
              <td>19</td>
              <td>16</td>
              <td>21</td>
              <td>18</td>
              <td>16</td>
            </tr>
            <tr>
              <td>CRC (Byers) 4th Sat</td>
              <td>27</td>
              <td>24</td>
              <td>24</td>
              <td>28</td>
              <td>26</td>
              <td>23</td>
              <td>28</td>
              <td>25</td>
              <td>22</td>
              <td>27</td>
              <td>24</td>
              <td>22</td>
            </tr>
            <tr>
              <td>CGC (Centennial) 2nd Sun</td>
              <td></td>
              <td>11</td>
              <td>11</td>
              <td>8</td>
              <td>13</td>
              <td>10</td>
              <td>8</td>
              <td>12</td>
              <td>9</td>
              <td>14</td>
              <td>11</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div>
      <div class="container" id="uspsarifle_matches">
        <table class="table">
          <thead>
            <tr>
              <th colspan="12" style="text-align: center;">
                <h3>CRC Action Rifle Matches 2018</h3>
              </th>
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
              <td><nuxt-link to="/clubs#CRCPS">CRCPS</nuxt-link>&nbsp;</td>
              <td></td>
              <td></td>
              <td>3</td>
              <td>7</td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
              <td>4</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <hr class="featurette-divider" />
    <div class="container" id="misc_matches" style="text-align: center;">
      <h3>Miscellaneous Matches 2018</h3>

      <p>1. 3rd Annual Shotgun Shootout 2018&nbsp;@ Weld, May 12th. POC: <a href="mailto:6brbob@gmail.com">Bob Markham</a>.</p>
    </div>
  </section>
</template>
