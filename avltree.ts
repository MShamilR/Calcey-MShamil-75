class StudentsMarksList {
  public root: StudentMarks | null;
  constructor() {
    this.root = null;
    this.count = 0
  }
  private getHeight(node: StudentMarks | null): number {
    return node ? node.height : 0;
  }

  // GET COUNT

  private getCount() {
    return this.count
  }

  // SEARCH STUDENT MARKS
  private isStudentMarksFound(studentId: number) {
  this.isFound(this.root, strudentId)
  }

  private isFound(node: StudentMarks | null, studentId: number ) {
    if (studentId < node.studentId) {
      isFound(node.left, studentId);
    } else if (studentId > node.studentId) {
      isFound(node.right, studentId);
  }
  }

  private updateHeight(node: StudentMarks): void {
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.left));
  }
  private getBalanceFactor(node: StudentMarks): number {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // INSERT MARKS
  
  public insert(studentId: number, marks: number): void {
    this.root = this.insertMarks(this.root, studentId, marks);
    this.count++
  }

  private insertMarks(
    node: StudentMarks | null,
      studentId: number
      marks: number
  ): StudentMarks {
    if (!node) {
      return new StudentMarks(studentId, marks);
    } else if (studentId < node.studentId) {
      node.left = this.insertMarks(node.left, studentId, marks);
      node;
    } else if (studentId > node.studentId) {
      node.right = this.insertMarks(node.right, studentId, marks);
      node;
    } else {
      return node;
    }
    this.updateHeight(node);
    let balance: number = this.getBalanceFactor(node);
    if (balance > 1) {
      let select = node.left as StudentMarks;
      if (studentId < select.studentId) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left as StudentMarks);
        return this.rightRotate(node);
      }
    } else if (balance < -1) {
      let select = node.left as StudentMarks;
      if (studentId > select.studentId) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.left as StudentMarks);
        return this.leftRotate(node);
      }
    }
    return node;
  }

  // DELETE MARKS

  private deleteMarks(studentId: number) {
    if (!this.root) {
      return undefined
    } else {
      if (studentId > this.root.s) 
    }
  }


  private rightRotate(node: StudentMarks): StudentMarks {
    let x: StudentMarks = node.left as StudentMarks;
    let T2 = x.right as StudentMarks;
    x.right = node;
    node.left = T2;
    this.updateHeight(node);
    this.updateHeight(x);
    return x;
  }
  private leftRotate(node: StudentMarks): StudentMarks {
    let x: StudentMarks = node.right as StudentMarks;
      let T2 = x.left as StudentMarks;
    x.right = node;
    node.left = T2;
    this.updateHeight(node);
    this.updateHeight(x);
    return x;
  }
  
  public inOrderTraversal(node: StudentMarks | null): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(
        `Student Id: ${node.studentId} | Marks Scored: ${node.marks}`
      );
      this.inOrderTraversal(node.right);
    }
  }
}
class StudentMarks {
  studentId: number;
  marks: number;
  left: StudentMarks | null;
  right: StudentMarks | null;
  height: number;
  constructor(studentId: number) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.marks = marks;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// Implement Delete
// Implement Search


