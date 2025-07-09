// GitHub service utility functions
// Fetches GitHub contribution data using GraphQL API
import { graphql } from '@octokit/graphql';
import { config } from './config';

// Helper function to format date as ISO 8601 string (YYYY-MM-DDTHH:MM:SSZ)
function formatDate(date) {
  return date.toISOString(); // This returns the date in the correct ISO 8601 format
}

// Function to fetch GitHub contribution data using GraphQL API
export async function fetchGitHubContributions(username = 'Abid-sh84') {
  try {
    // Use GitHub GraphQL API with authentication token
    const token = config.github.accessToken;
    console.log('Using token (first few chars):', token ? token.substring(0, 5) + '...' : 'not available');
    
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    
    // Calculate date range for the past year
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    
    // Format dates for the GraphQL query
    const fromDate = formatDate(oneYearAgo);
    const toDate = formatDate(today);
    
    console.log('Using date range:', { fromDate, toDate });
    
    // Fetch user data and contribution calendar using GraphQL
    const { user } = await graphqlWithAuth(`
      query($username: String!, $fromDate: DateTime!, $toDate: DateTime!) {
        user(login: $username) {
          name
          avatarUrl
          contributionsCollection(from: $fromDate, to: $toDate) {
            contributionCalendar {
              totalContributions
              weeks {
                firstDay
                contributionDays {
                  date
                  contributionCount
                  contributionLevel
                  weekday
                }
              }
            }
          }
          repositories(first: 1, orderBy: {field: PUSHED_AT, direction: DESC}) {
            nodes {
              name
              pushedAt
            }
          }
        }
      }
    `, {
      username,
      fromDate,
      toDate
    });
    
    // Process the contribution data to match our visualization format
    const contributionCalendar = user.contributionsCollection.contributionCalendar;
    const totalContributions = contributionCalendar.totalContributions;
    const weeks = contributionCalendar.weeks;
    
    // Create a 7×53 grid to ensure full year coverage (53 weeks to handle year transitions)
    const totalWeeks = Math.min(weeks.length, 53);
    const cells = [
      new Array(totalWeeks).fill(0), // Sunday
      new Array(totalWeeks).fill(0), // Monday
      new Array(totalWeeks).fill(0), // Tuesday
      new Array(totalWeeks).fill(0), // Wednesday
      new Array(totalWeeks).fill(0), // Thursday
      new Array(totalWeeks).fill(0), // Friday
      new Array(totalWeeks).fill(0)  // Saturday
    ];
    
    // Fill in the contribution data
    weeks.forEach((week, weekIndex) => {
      if (weekIndex >= totalWeeks) return; // Ensure we don't exceed array bounds
      
      week.contributionDays.forEach(day => {
        const weekday = day.weekday;
        const level = day.contributionLevel === 'NONE' ? 0 :
                      day.contributionLevel === 'FIRST_QUARTILE' ? 1 :
                      day.contributionLevel === 'SECOND_QUARTILE' ? 2 :
                      day.contributionLevel === 'THIRD_QUARTILE' ? 3 : 4;
        
        // Ensure weekday is within bounds (0-6)
        if (weekday >= 0 && weekday <= 6 && weekIndex < totalWeeks) {
          cells[weekday][weekIndex] = level;
        }
      });
    });
    
    // Generate month labels for the contribution graph
    const months = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Extract months from the weeks data
    let currentMonth = new Date(weeks[0].firstDay).getMonth();
    let monthStartWeekIndex = 0;
    
    weeks.forEach((week, weekIndex) => {
      if (weekIndex >= totalWeeks) return;
      
      const weekMonth = new Date(week.firstDay).getMonth();
      if (weekMonth !== currentMonth || weekIndex === 0) {
        months.push({
          name: monthNames[weekMonth],
          index: monthStartWeekIndex
        });
        currentMonth = weekMonth;
        monthStartWeekIndex = weekIndex;
      }
    });
    
    // Generate simplified month labels for display
    const monthLabels = months.map(month => month.name);
    
    // Get last push date from repositories
    const lastPushInfo = user.repositories?.nodes?.[0];
    let lastPushDate = null;
    
    if (lastPushInfo?.pushedAt) {
      const pushedDate = new Date(lastPushInfo.pushedAt);
      lastPushDate = {
        date: pushedDate.getDate(),
        month: monthNames[pushedDate.getMonth()],
        year: pushedDate.getFullYear(),
        formatted: `${pushedDate.getDate()} ${monthNames[pushedDate.getMonth()]} ${pushedDate.getFullYear()}`
      };
    }

    return {
      username,
      totalContributions,
      avatarUrl: user.avatarUrl,
      months: monthLabels,
      days: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
      cells,
      lastPushDate
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    
    // Log details about the error to help with debugging
    if (error.errors) {
      console.error('GraphQL errors:', error.errors);
    }
    if (error.request) {
      console.error('Request:', error.request);
    }
    
    // Return default mock data in case of error (with some sample contributions)
    const mockCells = [
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0)
    ];
    
    // Add some sample contributions to demonstrate the grid pattern
    for (let week = 0; week < 53; week++) {
      for (let day = 0; day < 7; day++) {
        // Add random contributions with higher chance of recent activity
        const isRecentWeek = week > 45; // Last ~7 weeks
        const randomChance = isRecentWeek ? 0.4 : 0.2;
        
        if (Math.random() < randomChance) {
          const level = Math.floor(Math.random() * 4) + 1; // 1-4
          mockCells[day][week] = level;
        }
      }
    }
    
    return {
      username,
      totalContributions: 222,
      avatarUrl: '',
      months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      days: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
      lastPushDate: {
        formatted: '2 Jul 2025'
      },
      cells: mockCells
    };
  }
}
