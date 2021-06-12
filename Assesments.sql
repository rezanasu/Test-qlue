/* Positive and Negative Scores */

select date AS day, SUM(score > 0) AS num_pos_scores, SUM(score < 0) AS num_neg_scores from assessments WHERE date >= "2011-03-01" AND date <= "2011-04-30" GROUP BY date;

/* Only positive scores from January to end of June */

select date AS day from assessments WHERE date >= "2011-01-01" AND date <= "2011-06-30" AND score > 0;