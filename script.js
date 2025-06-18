// script.js

document.addEventListener("DOMContentLoaded", () => {
  const examForm = document.getElementById("examForm");
  const questionsContainer = document.getElementById("questionsContainer"); // Container for dynamically added MCQ questions
  const submitExamButton = document.getElementById("submitExam");
  const showAnswersButton = document.getElementById("showAnswers");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const timerDisplay = document.getElementById("timer");

  // Define all Multiple Choice Questions data in an array of objects
  const mcqQuestions = [
    {
      id: "mcq-q1", // Changed IDs to be distinct and clear they are MCQs
      text: "1- The first step in the naïve greedy algorithm is?",
      options: {
        a: "a) adding flows with higher values",
        b: "b) reversing flow if required",
        c: "c) analysing the zero flow",
        d: "d) calculating the maximum flow using trial and error",
      },
      correct: "a",
    },
    {
      id: "mcq-q2",
      text: "2- Suppose you have coins of denominations 1,3 and 4. You use a greedy algorithm, in which you choose the largest denomination coin which is not greater than the remaining sum. For which of the following sums, will the algorithm produce an optimal answer?",
      options: {
        a: "a) 100",
        b: "b) 10",
        c: "c) 6",
        d: "d) 14",
      },
      correct: "c",
    },
    {
      id: "mcq-q3",
      text: "3- Choose the correct statement from the following.",
      options: {
        a: "a) branch and bound is not suitable where a greedy algorithm is not applicable",
        b: "b) branch and bound divides a problem into at least 2 new restricted sub problems",
        c: "c) backtracking divides a problem into at least 2 new restricted sub problems",
        d: "d) branch and bound is more efficient than backtracking",
      },
      correct: "b",
    },
    {
      id: "mcq-q4",
      text: "4- Which of the following algorithms is the best approach for solving Huffman codes?",
      options: {
        a: "a) greedy algorithm",
        b: "b) exhaustive search",
        c: "c) divide and conquer algorithm",
        d: "d) brute force algorithm",
      },
      correct: "a",
    },
    {
      id: "mcq-q5",
      text: "5- Fractional knapsack problem is solved most efficiently by which of the following algorithm?",
      options: {
        a: "a) Backtracking",
        b: "b) Greedy algorithm",
        c: "c) Dynamic programming",
        d: "d) Divide and conquer",
      },
      correct: "b",
    },
    {
      id: "mcq-q6",
      text: "6- Fractional knapsack problem is also known as",
      options: {
        a: "a) 0/1 knapsack problem",
        b: "b) Continuous knapsack problem",
        c: "c) Divisible knapsack problem",
        d: "d) Non-continuous knapsack problem",
      },
      correct: "b",
    },
    {
      id: "mcq-q7",
      text: "7- Fractional knapsack problem is solved most efficiently by which of the following algorithm?",
      options: {
        a: "a) divide and conquer",
        b: "b) dynamic programming",
        c: "c) greedy algorithm",
        d: "d) backtracking",
      },
      correct: "c",
    },
    {
      id: "mcq-q8",
      text: "8- What is the objective of knapsack problem?",
      options: {
        a: "a) Get maximum total value in the knapsack",
        b: "b) Get minimum total value in the knapsack",
        c: "c) Get maximum weight in the knapsack",
        d: "d) Get minimum weight in the knapsack",
      },
      correct: "a",
    },
    {
      id: "mcq-q9",
      text: "9- Which of the following statements about 0/1 knapsack problem and fractional knapsack problem is true?",
      options: {
        a: "a) In 0/1 knapsack problem items are divisible and in fractional knapsack problem items are non-divisible",
        b: "b) Both are same",
        c: "c) 0/1 knapsack is solved using greedy algorithm and fractional knapsack problem is solved using dynamic programming",
        d: "d) In 0/1 knapsack problem items are non-divisible and in fractional knapsack problem items are divisible",
      },
      correct: "d",
    },
    {
      id: "mcq-q10",
      text: "10- The time complexity of fractional knapsack problem is",
      options: {
        a: "a) O(n log n)",
        b: "b) O(n)",
        c: "c) $O(n^{2})$",
        d: "d) O(nW)",
      },
      correct: "a",
    },
    {
      id: "mcq-q11",
      text: "11- Fractional knapsack problem can be solved in O(n) time.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "b",
    },
    {
      id: "mcq-q12",
      text: "12- Given items as {value, weight} pairs {{40,20},{30,10},{20,5}}. Knapsack capacity = 20. Find maximum value obtained assuming items are divisible.",
      options: {
        a: "a) 60",
        b: "b) 80",
        c: "c) 100",
        d: "d) 40",
      },
      correct: "c",
    },
    {
      id: "mcq-q13",
      text: "13- The result of fractional knapsack problem is greater than or equal to 0/1 knapsack.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "a",
    },
    {
      id: "mcq-q14",
      text: "14- The major time taking step in fractional knapsack problem is",
      options: {
        a: "a) dividing items into fractions",
        b: "b) adding items to knapsack",
        c: "c) sorting",
        d: "d) iterating through sorted items",
      },
      correct: "c",
    },
    {
      id: "mcq-q15",
      text: "15- Given items as {value, weight} pairs {{60,20},{50,25},{20,5}}. Knapsack capacity = 40. Find maximum value obtained assuming items are divisible and non-divisible respectively.",
      options: {
        a: "a) 100, 80",
        b: "b) 110, 70",
        c: "c) 130, 110",
        d: "d) 110, 80",
      },
      correct: "d",
    },
    {
      id: "mcq-q16",
      text: "16- Which of the following approaches should be used to find a solution to activity selection problem?",
      options: {
        a: "a) Greedy approach",
        b: "b) Divide and conquer",
        c: "c) Brute force approach",
        d: "d) Dynamic programming",
      },
      correct: "a",
    },
    {
      id: "mcq-q17",
      text: "17- Suppose there are two activities A and B, whose start and finish times are $S_{A}$, $F_{A}$ and $S_{B}$, $F_{B}$ respectively. The two activities are said to be compatible, under which of the following conditions?",
      options: {
        a: "a) $S_{A}=F_{B}$",
        b: "b) $S_{A}>F_{B}$",
        c: "c) $S_{A}>=F_{B}$ or $S_{B}>=F_{A}$",
        d: "d) $S_{A}>=F_{B}$ and $S_{B}=F_{A}$",
      },
      correct: "c",
    },
    {
      id: "mcq-q18",
      text: "18- Consider the following algorithm to find a solution to activity selection problem. Which of the following options is most suitable to fill in the blank:<pre><code>\nSort the given activity List\ndisplay the first activity\nset i=1\nfor j=1 to n-1 do\n    if begin time of activity[j] >= completion of activity[i] then\n        i=j\n        // BLANK HERE\n                </code></pre>",
      options: {
        a: "a) display activity i",
        b: "b) display activity j",
        c: "c) ignore activity",
        d: "d) increment j",
      },
      correct: "b",
    },
    {
      id: "mcq-q19",
      text: "19- Consider the following number of activities with start and end times mentioned below. In what sequence will the activity be selected to maximize the number of activities, with no conflicts?<table><thead><tr><th>Activity</th><th>Start Time</th><th>End Time</th></tr></thead><tbody><tr><td>A1</td><td>1</td><td>2</td></tr><tr><td>A2</td><td>2</td><td>5</td></tr><tr><td>A3</td><td>1</td><td>5</td></tr><tr><td>A4</td><td>3</td><td>6</td></tr><tr><td>A5</td><td>6</td><td>8</td></tr><tr><td>A6</td><td>4</td><td>9</td></tr></tbody></table>",
      options: {
        a: "a) A1, A2, A5",
        b: "b) A1, A2, A3, A4",
        c: "c) A1, A3, A5",
        d: "d) A1, A2, A5, A6",
      },
      correct: "a",
    },
    {
      id: "mcq-q20",
      text: "20- The time complexity to find a solution to activity selection problem takes O(n log n) time, when the list is not sorted.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "a",
    },
    {
      id: "mcq-q21",
      text: "21- A solution to activity selection problem can contain two activities which overlap over a certain period of time.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "b",
    },
    {
      id: "mcq-q22",
      text: "22- Which of the following algorithms is the best approach for solving Huffman codes?",
      options: {
        a: "a) exhaustive search",
        b: "b) greedy algorithm",
        c: "c) brute force algorithm",
        d: "d) divide and conquer algorithm",
      },
      correct: "b",
    },
    {
      id: "mcq-q23",
      text: "23- How many printable characters does ASCII character set consist of?",
      options: {
        a: "a) 120",
        b: "b) 128",
        c: "c) 100",
        d: "d) 98",
      },
      correct: "d", // Adjusted to 'd' as per user's PDF
    },
    {
      id: "mcq-q24",
      text: "24- Which bit is reserved as parity bit in ASCII set?",
      options: {
        a: "a) first",
        b: "b) seventh",
        c: "c) eighth",
        d: "d) tenth",
      },
      correct: "c",
    },
    {
      id: "mcq-q25",
      text: "25- How many bits are required for standard encoding if the character set size is X?",
      options: {
        a: "a) log X",
        b: "b) $X+1$",
        c: "c) 2X",
        d: "d) X2",
      },
      correct: "a",
    },
    {
      id: "mcq-q26",
      text: "26- The length of the code is not dependent on the frequency of occurrence of the characters.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "b",
    },
    {
      id: "mcq-q27",
      text: "27- In Huffman coding, the data in the tree always occur in?",
      options: {
        a: "a) roots",
        b: "b) leaves",
        c: "c) left sub trees",
        d: "d) right sub trees",
      },
      correct: "b",
    },
    {
      id: "mcq-q28",
      text: "28- From the following given tree, what is the code word for 'a'?<img src='./img28.jpg' alt='Huffman Tree for Q28'>",
      options: {
        a: "a) 011",
        b: "b) 010",
        c: "c) 100",
        d: "d) 101",
      },
      correct: "a",
    },
    {
      id: "mcq-q29",
      text: "29- From the following given tree, what is the computed code word for 'c'?<img src='./img.png' alt='Huffman Tree for Q29'>",
      options: {
        a: "a) 111",
        b: "b) 101",
        c: "c) 110",
        d: "d) 011",
      },
      correct: "c",
    },
    {
      id: "mcq-q30",
      text: "30- What is the running time of Huffman coding algorithm?",
      options: {
        a: "a) O(C)",
        b: "b) O(log C)",
        c: "c) $O(C~log~C)$",
        d: "d) O( N log C)",
      },
      correct: "c",
    },
    {
      id: "mcq-q31",
      text: "31- Which of the following is/are property/properties of dynamic programming problem?",
      options: {
        a: "a) Optimal Substructure",
        b: "b) Overlapping sub problems",
        c: "c) Greedy approach",
        d: "d) Both Optimal Substructure and Overlapping sub problems",
      },
      correct: "d",
    },
    {
      id: "mcq-q32",
      text: "32- If an optimal solution to a problem can be constructed from optimal solutions to its sub problems, the problem exhibits property.",
      options: {
        a: "a) overlapping sub problems",
        b: "b) optimal substructure",
        c: "c) memoization",
        d: "d) greedy",
      },
      correct: "b",
    },
    {
      id: "mcq-q33",
      text: "33- If a problem can be broken down into sub problems which are re-used several times, the problem exhibits property.",
      options: {
        a: "a) overlapping sub problems",
        b: "b) optimal substructure",
        c: "c) memoization",
        d: "d) greedy",
      },
      correct: "a",
    },
    {
      id: "mcq-q34",
      text: "34- If a problem can be solved by combining optimal solutions to non-overlapping problems, the strategy is called",
      options: {
        a: "a) dynamic programming",
        b: "b) greedy",
        c: "c) divide and conquer",
        d: "d) recursion",
      },
      correct: "c",
    },
    {
      id: "mcq-q35",
      text: "35- When dynamic programming is applied to a problem, it takes considerably less time as compared to other methods that do not take advantage of overlapping sub-problems.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "a",
    },
    {
      id: "mcq-q36",
      text: "36- A greedy algorithm can be used to solve all dynamic programming problems.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "b",
    },
    {
      id: "mcq-q37",
      text: "37- In dynamic programming, the technique of storing previously computed values is called",
      options: {
        a: "a) value preservation property",
        b: "b) value storage property",
        c: "c) memoization",
        d: "d) mapping",
      },
      correct: "c",
    },
    {
      id: "mcq-q38",
      text: "38- When top-down dynamic programming approach is applied to a problem, it usually",
      options: {
        a: "a) reduces both time complexity and space complexity",
        b: "b) reduces time complexity and increases space complexity",
        c: "c) increases time complexity and reduces space complexity",
        d: "d) increases both time complexity and space complexity",
      },
      correct: "b",
    },
    {
      id: "mcq-q39",
      text: "39- Which of the following problems is not solved using dynamic programming?",
      options: {
        a: "a) 0/1 knapsack problem",
        b: "b) Matrix chain multiplication problem",
        c: "c) Edit distance problem",
        d: "d) Fractional knapsack problem",
      },
      correct: "d",
    },
    {
      id: "mcq-q40",
      text: "40- Which of the following problems should be solved using dynamic programming?",
      options: {
        a: "a) Mergesort",
        b: "b) Binary search",
        c: "c) Longest common subsequence",
        d: "d) Quicksort",
      },
      correct: "c",
    },
    {
      id: "mcq-q41",
      text: "41- Knapsack problem is an example of",
      options: {
        a: "a) greedy algorithm",
        b: "b) 2D dynamic programming",
        c: "c) 1D dynamic programming",
        d: "d) divide and conquer",
      },
      correct: "b",
    },
    {
      id: "mcq-q42",
      text: "42- Which of the following methods can be used to solve the knapsack problem?",
      options: {
        a: "a) Brute force algorithm",
        b: "b) Recursion",
        c: "c) Dynamic programming",
        d: "d) Brute force, Recursion, and Dynamic programming",
      },
      correct: "d",
    },
    {
      id: "mcq-q43",
      text: "43- You have a knapsack that can carry a maximum weight of 60. There are 4 items with weights { 20, 30, 40, 70} and values { 70, 80, 90, 200 }. What is the maximum value of items you can carry using the knapsack?",
      options: {
        a: "a) 160",
        b: "b) 200",
        c: "c) 170",
        d: "d) 90",
      },
      correct: "a",
    },
    {
      id: "mcq-q44",
      text: "44- Which of the following problems is equivalent to 0-1 knapsack problem?",
      options: {
        a: "a) You have a bag that can carry a maximum weight of W. You have N items that have weight {w1, w2, w3,...., wn} and value {v1, v2, v3,....,vn}. You can divide the items into smaller pieces. Select the items in such a way that you get maximum value.",
        b: "b) You are studying for an exam and you have to study N questions. The questions take {t1, t2, t3,...., tn} time (in hours) and carry { m1, m2, m3,...., mn} marks. You can study for a maximum of T hours. You can either study a question or leave it. Select the questions in such a way that you maximize your marks.",
        c: "c) You have infinite coins of denominations {v1,v2,v3,......,vn} and a sum S. You have to find the minimum number of coins required to get the sum S.",
        d: "d) You have a travel bag that can carry a maximum weight of 15 kg. There are 4 items with weights {10, 20, 15, 40} and values {1, 2, 3, 4}. You can divide the items into smaller pieces. Select the items in such a way that you get maximum value.",
      },
      correct: "b",
    },
    {
      id: "mcq-q45",
      text: "45- What is the time complexity of the brute force algorithm used to solve the knapsack problem?",
      options: {
        a: "a) $O(n)$",
        b: "b) O(n!)",
        c: "c) $O(2^{n})$",
        d: "d) O(n³)",
      },
      correct: "c",
    },
    {
      id: "mcq-q46",
      text: "46- 0-1 knapsack problem can be solved using greedy algorithm.",
      options: {
        a: "a) True",
        b: "b) False",
      },
      correct: "b",
    },
    {
      id: "mcq-q47",
      text: "47- Which of the following statements is true for any simple connected graph with more than two vertices?",
      options: {
        a: "(a) No two vertices have the same degree",
        b: "(b) At least two vertices have the same degree",
        c: "(c) At least 3 vertices have the same degree",
        d: "(d) All vertices have the same degree",
      },
      correct: "b",
    },
    {
      id: "mcq-q48",
      text: "48- What is the number of edges in a complete graph Kn having n vertices?",
      options: {
        a: "(a) $n(n+1)/2$",
        b: "(b) $n(n-1)/2$",
        c: "(c) $n^{2}$",
        d: "d) None of the above",
      },
      correct: "b",
    },
    {
      id: "mcq-q49",
      text: "49- What is the maximum number of edges in a bipartite graph having 12 vertices?",
      options: {
        a: "(a) 24",
        b: "(b) 38",
        c: "(c) 36",
        d: "(d) 32",
      },
      correct: "c",
    },
    {
      id: "mcq-q50",
      text: "50- What is the determinant of the adjacency matrix of C4?",
      options: {
        a: "(a) 1",
        b: "(b)-1",
        c: "(c) 0",
        d: "d) None from the graph",
      },
      correct: "c",
    },
    {
      id: "mcq-q51",
      text: "51- Which of the following is true for any simple connected graph with more than two vertices?",
      options: {
        a: "(a) No two vertices have the same degree",
        b: "(b) At least two vertices have the same degree",
        c: "(c) At least 3 vertices have the same degree",
        d: "(d) All vertices have the same degree",
      },
      correct: "b",
    },
  ];

  // Define the correct answers for long-answer questions
  const longAnswerSolutions = {
    q2_long_answer: `
Q2. Huffman Coding for A={a/20,b/15,c/5,d/15,e/45}

1.  List initial frequencies (sorted):
    * c: 5
    * b: 15
    * d: 15
    * a: 20
    * e: 45

2.  Repeatedly combine the two nodes with the smallest frequencies:
    * Step 1: Combine 'c' (5) and 'b' (15) -> New node (cb): 20
    * Step 2: Combine 'd' (15) and (cb) (20) -> New node (dcb): 35
    * Step 3: Combine 'a' (20) and (dcb) (35) -> New node (adcb): 55
    * Step 4: Combine 'e' (45) and (adcb) (55) -> New node (eadcb): 100 (Root)

3.  Huffman Codes (example mapping 0=left, 1=right):
    * e: 0
    * a: 10
    * d: 110
    * c: 1110
    * b: 1111

4.  Optimality: Huffman coding is a greedy algorithm proven to be optimal for constructing prefix codes, minimizing the total weighted path length (total bits).
        `.trim(),

    q3a_long_answer_tree: `
Q3. Huffman and Fixed-Length Encoding:
a) Optimal Huffman code:

1.  Huffman Tree Construction Steps:
    * Initial Frequencies (sorted): d: 2, u: 2, m: 8, e: 10, s: 10, c: 11, o: 15, a: 20, t: 22
    * Combine d(2), u(2) -> (du):4
    * Combine (du):4, m:8 -> (dum):12
    * Combine e:10, s:10 -> (es):20
    * Combine (dum):12, c:11 -> (dumc):23
    * Combine o:15, (es):20 -> (oes):35
    * Combine a:20, t:22 -> (at):42
    * Combine (dumc):23, (oes):35 -> (dumcoes):58
    * Combine (at):42, (dumcoes):58 -> (ROOT):100

    Example Huffman Tree Structure (with codes, 0 for left, 1 for right):
                  (100)
                /       \\
              0(42)     1(58)
             /   \\     /    \\
           0a    1t   0(23)   1(35)
                     /    \\   /    \\
                    0c   1(12) 0o   1(20)
                        /    \\      /    \\
                       0(4)  1m    0e    1s
                      /   \\
                     0d   1u
        `.trim(),

    q3a_long_answer_memory: `
Q3a.3) Memory required with Huffman encoding:
Total characters = 10,000 (since frequencies are in 100s)

Assuming the following Huffman code lengths derived from a typical Huffman tree for these frequencies (these are examples, actual lengths depend on tree construction details):
* a: 2000 chars * 2 bits = 4000 bits (e.g., 00)
* c: 1100 chars * 3 bits = 3300 bits (e.g., 100)
* d: 200 chars * 4 bits = 800 bits (e.g., 1010)
* e: 1000 chars * 4 bits = 4000 bits (e.g., 1110)
* o: 1500 chars * 3 bits = 4500 bits (e.g., 110)
* m: 800 chars * 4 bits = 3200 bits (e.g., 1011)
* s: 1000 chars * 4 bits = 4000 bits (e.g., 1111)
* t: 2200 chars * 2 bits = 4400 bits (e.g., 01)
* u: 200 chars * 4 bits = 800 bits (e.g., 1010, could be different from 'd' if tree paths diverge)

Total memory = 4000 + 3300 + 800 + 4000 + 4500 + 3200 + 4000 + 4400 + 800 = 29000 bits
Total memory in bytes = 29000 / 8 = 3625 bytes
        `.trim(),

    q3b_long_answer_fixed_size: `
Q3b.2) File size with fixed-length encoding:
Number of unique characters = 9 (a, c, d, e, o, m, s, t, u)
Bits per character = ceil(log2(9)) = ceil(3.169) = 4 bits

Total file size = 10,000 characters * 4 bits/character = 40,000 bits = 5000 bytes
        `.trim(),

    q4_long_answer: `
Q4. Shortest distance for travelling all points (Traveling Salesperson Problem)

Optimal Algorithm: For a small graph (4 nodes), brute force (checking all permutations of intermediate nodes) or Dynamic Programming (Held-Karp) can find the optimal solution.

Edges and their weights:
* A to B: 10, B to A: 5
* A to C: 6, C to A: 16
* A to D: 15, D to A: 10
* B to C: 3, C to B: 9
* B to D: 8, D to B: 10
* C to D: 12, D to C: 9

Possible Hamiltonian cycles starting and ending at A:

1.  A -> B -> C -> D -> A: 10 + 3 + 12 + 10 = 35
2.  A -> B -> D -> C -> A: 10 + 8 + 9 + 16 = 43
3.  A -> C -> B -> D -> A: 6 + 9 + 8 + 10 = 33
4.  A -> C -> D -> B -> A: 6 + 12 + 10 + 5 = 33
5.  A -> D -> B -> C -> A: 15 + 10 + 3 + 16 = 44
6.  A -> D -> C -> B -> A: 15 + 9 + 9 + 5 = 38

Shortest distance: 33
Optimal tours: A -> C -> B -> D -> A and A -> C -> D -> B -> A
        `.trim(),
  };

  // Timer variables (2 hours = 120 minutes = 7200 seconds)
  const examDurationSeconds = 120 * 60;
  let timeRemaining = examDurationSeconds;
  let timerInterval;
  let examSubmitted = false; // Flag to track submission state

  // --- Function to create a single Multiple Choice Question block ---
  function createMcqQuestion(questionData) {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");
    questionBlock.dataset.questionId = questionData.id; // Store ID in a data attribute for easy lookup

    const questionP = document.createElement("p");
    questionP.innerHTML = questionData.text; // Use innerHTML to render LaTeX and other tags
    questionBlock.appendChild(questionP);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    for (const [key, value] of Object.entries(questionData.options)) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = questionData.id; // Name attribute matches question ID
      input.value = key;

      const span = document.createElement("span");
      span.innerHTML = value; // Use innerHTML for option text

      label.appendChild(input);
      label.appendChild(span);
      optionsDiv.appendChild(label);
    }

    questionBlock.appendChild(optionsDiv);

    const feedbackDiv = document.createElement("div");
    feedbackDiv.classList.add("answer-feedback");
    feedbackDiv.id = `${questionData.id}-feedback`; // Unique ID for feedback
    questionBlock.appendChild(feedbackDiv);

    return questionBlock;
  }

  // --- Function to render all MCQ questions ---
  function renderMcqQuestions() {
    mcqQuestions.forEach((qData) => {
      const questionElement = createMcqQuestion(qData);
      questionsContainer.appendChild(questionElement);
    });
    // After rendering, process math (if any)
    // Check if MathJax is loaded, otherwise, load it
    if (typeof MathJax === "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        MathJax.typeset(); // Typeset math after it's loaded
      };
    } else {
      MathJax.typeset(); // If MathJax is already loaded, just typeset
    }
  }

  // --- Timer Functions ---
  function startTimer() {
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        handleSubmit(null, true); // Submit automatically when time runs out
        alert("Time is up! Your exam has been submitted automatically.");
      }
    }, 1000); // Update every second
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `Time Remaining: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  // --- Answer Checking Functions (for MCQs) ---
  function checkMultipleChoiceAnswers() {
    let score = 0;
    let totalMultipleChoice = 0;

    // Iterate through the data, not DOM directly, then find corresponding DOM elements
    mcqQuestions.forEach((qData) => {
      const questionId = qData.id;
      // Find the specific question block using the data-question-id attribute
      const qBlock = document.querySelector(
        `.question-block[data-question-id="${questionId}"]`
      );

      if (!qBlock) {
        console.error(`Question block not found for ID: ${questionId}`);
        return; // Skip if element not found
      }

      const feedbackDiv = qBlock.querySelector(".answer-feedback");

      // Reset previous feedback and styling
      if (feedbackDiv) {
        feedbackDiv.textContent = "";
        feedbackDiv.classList.remove("correct", "incorrect");
        feedbackDiv.style.display = "none";
        feedbackDiv.style.animation = ""; // Reset animation
      }
      qBlock.querySelectorAll("label").forEach((label) => {
        label.style.backgroundColor = ""; // Remove background color
        label.style.borderColor = ""; // Remove border color
      });

      totalMultipleChoice++;
      // Get the selected radio button for this specific question
      const selectedOption = qBlock.querySelector(
        `input[name="${questionId}"]:checked`
      );
      const correctAnswerValue = qData.correct;

      if (selectedOption) {
        // Add animation class to selected question block for visual feedback
        qBlock.classList.add("selected");
        setTimeout(() => qBlock.classList.remove("selected"), 700); // Remove after animation

        if (selectedOption.value === correctAnswerValue) {
          score++;
          if (feedbackDiv) {
            feedbackDiv.textContent = "Correct!";
            feedbackDiv.classList.add("correct");
            feedbackDiv.style.display = "block";
          }
        } else {
          if (feedbackDiv) {
            feedbackDiv.textContent = `Incorrect. Correct answer was: ${correctAnswerValue.toUpperCase()}`;
            feedbackDiv.classList.add("incorrect");
            feedbackDiv.style.display = "block";
          }
        }
      } else {
        // If no option selected for a multiple-choice question
        if (feedbackDiv) {
          feedbackDiv.textContent = `Unanswered. Correct answer was: ${correctAnswerValue.toUpperCase()}`;
          feedbackDiv.classList.add("incorrect"); // Treat as incorrect if unanswered
          feedbackDiv.style.display = "block";
        }
      }
    });
    return { score, totalMultipleChoice };
  }

  function displayOverallScore(score, totalQuestions) {
    scoreDisplay.textContent = `Your Score: ${score} / ${totalQuestions}`;
    scoreDisplay.classList.add("show");
  }

  // --- Show Correct Answers Function (for MCQs and Long Answers) ---
  function showCorrectAnswersLogic() {
    // Stop timer and hide it
    clearInterval(timerInterval);
    timerDisplay.style.display = "none";

    // Hide score display if it was shown
    scoreDisplay.classList.remove("show");

    // Disable buttons after showing answers
    submitExamButton.disabled = true;
    showAnswersButton.disabled = true;

    // Handle MCQs
    mcqQuestions.forEach((qData) => {
      const questionId = qData.id;
      const qBlock = document.querySelector(
        `.question-block[data-question-id="${questionId}"]`
      );

      if (!qBlock) return; // Skip if element not found

      const feedbackDiv = qBlock.querySelector(".answer-feedback");

      if (feedbackDiv) {
        feedbackDiv.textContent = "";
        feedbackDiv.classList.remove("correct", "incorrect");
        feedbackDiv.style.display = "none";
        feedbackDiv.style.animation = ""; // Reset animation
      }

      const correctAnswerValue = qData.correct;
      const allOptions = qBlock.querySelectorAll(`input[name="${questionId}"]`);

      allOptions.forEach((option) => {
        const label = option.closest("label");
        // Reset all option styles first
        label.style.backgroundColor = "";
        label.style.borderColor = "";
        option.checked = false; // Uncheck all user selections

        // Highlight the correct answer and mark it as checked (optional)
        if (option.value === correctAnswerValue) {
          label.style.backgroundColor = "var(--correct-bg-light)"; // Use the new light correct background
          label.style.borderColor = "var(--correct-feedback)";
          // option.checked = true; // Optionally show the correct answer as selected
        }
        option.disabled = true; // Disable all radio buttons
      });

      if (feedbackDiv) {
        feedbackDiv.textContent = `Correct answer: ${correctAnswerValue.toUpperCase()}`;
        feedbackDiv.classList.add("correct");
        feedbackDiv.style.display = "block";
        // Remove animation after showing feedback directly for show answers
        feedbackDiv.style.animation = "none";
      }
    });

    // Handle Long Answer Questions
    document.querySelectorAll("textarea").forEach((textareaInput) => {
      const textareaName = textareaInput.name;
      const feedbackDiv = textareaInput
        .closest(".question-block")
        .querySelector(".answer-feedback");

      if (longAnswerSolutions[textareaName]) {
        textareaInput.value = longAnswerSolutions[textareaName];
        textareaInput.readOnly = true;

        if (feedbackDiv) {
          feedbackDiv.textContent = "Correct Answer Displayed Below:";
          feedbackDiv.classList.add("correct");
          feedbackDiv.style.display = "block";
          feedbackDiv.style.animation = "none";
        }
      }
    });
  }

  // --- Event Handlers ---
  examForm.addEventListener("submit", handleSubmit);
  showAnswersButton.addEventListener("click", showCorrectAnswersLogic);

  // Function to handle form submission (either by button or timer)
  function handleSubmit(event, fromTimer = false) {
    if (event) event.preventDefault(); // Prevent default form submission if triggered by button

    if (examSubmitted) return; // Prevent multiple submissions

    clearInterval(timerInterval); // Stop the timer
    submitExamButton.disabled = true; // Disable submit button after submission
    showAnswersButton.disabled = false; // Enable show answers button
    examSubmitted = true; // Set flag to true

    const { score, totalMultipleChoice } = checkMultipleChoiceAnswers();
    displayOverallScore(score, totalMultipleChoice);

    // Optionally disable all input fields after submission
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.disabled = true;
    });
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.readOnly = true;
    });

    if (fromTimer) {
      // If submitted by timer, you might want to automatically show answers
      // showCorrectAnswersLogic(); // Uncomment this line if you want answers to appear automatically on timer end.
    }
  }

  // Initial setup: Render questions, update timer, start timer
  renderMcqQuestions();
  updateTimerDisplay(); // Display initial time
  startTimer();
});
